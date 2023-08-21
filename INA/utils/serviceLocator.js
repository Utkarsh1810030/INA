const Dislocator = require('dislocator');

module.exports = function(config){
    const serviceLocator = new Dislocator();

    serviceLocator.register("config", config).use(require('../openaiConfiguration/openaiClient'))

    return serviceLocator
}