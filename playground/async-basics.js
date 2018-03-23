console.log("async START");

    setTimeout( () => {
        console.log("call back call");
    }, 5000);

    setTimeout( () => {
        console.log("2 call back call");
    }, 0 );


console.log("async END");