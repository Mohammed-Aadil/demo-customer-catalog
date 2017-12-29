/**
 * Function to get random string
 * @param {number} len 
 */
function randomString (len) {
  var str = 'abcde fgh ijklmnopqrst uvwxyz';
  var resStr = '';
  for (var i = 0; i < len; i++)
      resStr += str[Math.round(Math.random() * 100) % str.length];
  return resStr;
};

/**
 * Function to get random string
 * @param {number} len 
 */
function randomNumberAsString (len) {
  var str = '1234567890';
  var resStr = '';
  for (var i = 0; i < len; i++)
      resStr += str[Math.round(Math.random() * 100) % str.length];
  return resStr;
};

module.exports = {
  randomString: randomString,
  randomNumberAsString: randomNumberAsString
};