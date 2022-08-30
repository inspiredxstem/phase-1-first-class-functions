function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function exampleFunction(){
        return 0;
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'nothing';
    }
}