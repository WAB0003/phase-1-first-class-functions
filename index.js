function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function name(){
        return "return a named function"
    };
}

function returnsAnAnonymousFunction(){
    return function (){
        return "anonymous function"
    };
}