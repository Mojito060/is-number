/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(num) {
  // Check if num is a finite number
  if (typeof num === 'number') {
    return num === num; // This checks for NaN
  }
  // Check if num is a non-empty string and try to convert it to a number
  return typeof num === 'string' && num.trim() ? !isNaN(num) : false;
};
