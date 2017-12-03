const md5 = require("md5");

module.exports = {
    createSecretKey: function(){
        const random = Math.random(),
              time   = Date.now();
        return md5(time + random);
    }
};