module.exports = function(serviceLocator){
    return async (req, res, next) => {
        try{
            const {message} = req.body;
            const response = await serviceLocator.openAIClient.createImage({
                prompt: message,
                n:1
            })
            res.status(200).send(response.data);
            next();
        }catch(err){
            next(err)
        }
}}