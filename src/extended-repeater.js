const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let s1 = [];
  let s2 = [];

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = String(options.addition);
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  if(options.addition === undefined) {

      addition = '';

  }

  for(let i = 0; i < repeatTimes; i++ ){

      s1.push(str);
      s2 = [];

      for(let j = 0; j < additionRepeatTimes; j++){

          s2.push(addition);

      }

      s1[i] += s2.join(additionSeparator);

  }

    return s1.join(separator);

};
  