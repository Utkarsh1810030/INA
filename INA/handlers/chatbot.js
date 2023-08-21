module.exports = function (serviceLocator) {
  const openAIClient = serviceLocator.get("openAIClient");
  const openAIConfig = serviceLocator.config.openai;

  return async (req, res, next) => {
    try {
      const { message } = req.body;
      if (req.user.credits && message.length > 4) {
        const response = await openAIClient.createChatCompletion({
          model: openAIConfig.model,
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        });

        req.user.credits -= 1;
        const user = await req.user.save();
        res.status(200).send({ data: response.data, user });
        next();
      } else {
       throw new Error({message: 'Not enough quota to make requests'})
      }
    } catch (err) {
      next(err);
    }
  };
};
