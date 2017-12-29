var ProjectConfig = require('./../config').ProjectConfig;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

function Validator() {
    
};

Validator.prototype.emailValidator = function (data) {
    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return emailRegex.test(data);
};

Validator.prototype.phoneValidator = function (data) {
    var mobileNumber = phoneUtil.parse(data, new ProjectConfig().defaultRegion);
    return phoneUtil.isValidNumber(mobileNumber);
};

module.exports = Validator;