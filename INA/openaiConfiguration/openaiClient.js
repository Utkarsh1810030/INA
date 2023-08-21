const openai = require('openai');

module.exports = function(serviceLocator){
    serviceLocator.register("openAIClient", function(serviceLocator){
        const config = serviceLocator.get("config");
        const configuration = new openai.Configuration({
            apiKey: config.openai.apiKey
        })
        return new openai.OpenAIApi(configuration);
    })
}

// const client = new openai.Configuration({ 
//     apiKey: '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'
// });

// module.exports = new openai.OpenAIApi(client);