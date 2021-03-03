const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(message, keyword) {

        if( ! message || ! keyword ) {
            throw new Error();
        }

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        let m = message.toUpperCase().split('');
        let k = keyword.toUpperCase().split('');

        let result = [];

        while( 0 < m.length ){

            if ( alphabet.indexOf( m[0] ) !== -1 ){

                let alphabetSum   = alphabet.indexOf(m[0]) + alphabet.indexOf(k[0]);
                let alphabetIndex = ( alphabetSum >= alphabet.length ) ?  alphabetSum % alphabet.length : alphabetSum;

                result.push( alphabet[ alphabetIndex ] );

                k.shift();

            } else {

                result.push( m[0] );

            }

            m.shift();

            k = (k.length === 0) ? keyword.toUpperCase().split('') : k;

        }

        return (this.reverse === false) ? result.reverse().join('') : result.join('');

    }

    decrypt(message, keyword) {

        if( ! message ||  !keyword ) {
            throw new Error();
        }

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        let m = message.toUpperCase().split('');
        let k = keyword.toUpperCase().split('');

        let result = [];

        while( 0 < m.length ){

            if ( alphabet.indexOf( m[0] ) !== -1 ){

                let alphabetSum   = alphabet.indexOf(m[0]) - alphabet.indexOf(k[0]);
                let alphabetIndex = ( alphabetSum < 0 ) ? alphabet.length + alphabetSum : alphabetSum;

                result.push( alphabet[alphabetIndex] );

                k.shift();

            } else {

                result.push( m[0] );

            }

            m.shift();

            k = (k.length === 0) ? keyword.toUpperCase().split('') : k;

        }

        return (this.reverse === false) ? result.reverse().join('') : result.join('');

    }

}

module.exports = VigenereCipheringMachine;
