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
}

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
}

/**
 * Function that return random number in given range
 * @param {number} min
 * @param {number} max
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  randomInt: randomInt,
  randomString: randomString,
  randomNumberAsString: randomNumberAsString
};
