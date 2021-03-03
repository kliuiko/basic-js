const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY  = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample( sampleActivity ) {

  if( typeof sampleActivity !== 'string' || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 || isNaN(sampleActivity) ) return false;

  let result = Math.log(MODERN_ACTIVITY) - Math.log(Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD );

  return result;

};
