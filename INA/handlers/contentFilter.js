module.exports = function(serviceLocator){
    const openAIClient = serviceLocator.get("openAIClient");
    return async(req, res, next)=>{
        try{
            const moderationResponse = await openAIClient.createModeration({
                input: req.body.message
            })
            if(moderationResponse.data.results[0].flagged){
               return res.status(400).send("Inappropriate Content");
            }
            next()
        }catch(err){
            next(err);
        }
    }
}