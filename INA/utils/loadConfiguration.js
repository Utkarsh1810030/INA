const oconf = require('oconf');
const path = require('path')

module.exports = () => {
    try{
        const env = process.env.NODE_ENV || 'development';
        const configuration = path.join(__dirname , `../config/${env}.cjson`);
        return oconf.load(configuration);
    }catch(err){
        return err;
    }
}