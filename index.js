function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    return function test() {
        console.log(test);
      };
}

function returnsAnAnonymousFunction(){
    return () => ""
}

