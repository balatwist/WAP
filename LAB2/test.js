console . log( ' s ta r t ' ); async function foo () {
    return ' d o ne ! ' ;
    }
    async function bar () {
    console . log( ' i n si d e b ar - s t a r t' ); let result = await foo(); console . log( result ); // " do n e ! " co n so l e . log( ' i n si d e b ar - end' );
    }
    bar ( );
    console . log( ' e nd ' );
    