const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {

  if( ! Array.isArray( members ) ) return false;

  const reducer = ( team, memberName ) => {

      if (typeof memberName === 'string') {

          return team + memberName.trim()[0];

      } else {

          return team;

      }
  };


    return members.reduce( reducer, '' ).toUpperCase().split('').sort().join('');

}

