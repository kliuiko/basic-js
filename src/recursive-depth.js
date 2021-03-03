const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr, depth = 1, set = [] ) {

      set.push(depth);

      arr.forEach( item => {

        if ( Array.isArray(item) ) {

          return this.calculateDepth(item, depth + 1, set);

        }

      });

      return set.sort( (a, b) => b-a )[0];

  }

};