function* fibGen() 
{
    var fn1 = 0;
    var fn2 = 1;
    while (true) 
    {  
        var current = fn1
        fn1 = fn2
        fn2 = current + fn1
        yield current
    }
}

function fib() {
    var fn1 = 0;
    var fn2 = 1;
    return {
        next : function() {
            var current = fn1
            fn1 = fn2;
            fn2 = current + fn1;  
            return {
                value : current,  
                done : false
            }
        }
    }
}
    
fibs1 = []
fibs2 = []
fibs3 = []

console.log("Generators with 'of'")
for ( var i of fibGen() ) {
    if (i > 1000) break;
    fibs1.push(i)
}
console.log(fibs1)

console.log("Generators lecture way")
var it = fibGen();
for ( var result; result = it.next(), !result.done; ) {
    if (result.value > 1000) break
    else {
        fibs2.push( result.value )
    }
}
console.log(fibs2)

console.log("Iterators lecture way")
var it = fib();
for ( var result; result = it.next(), !result.done; ) {
    if (result.value > 1000) break
    else {
        fibs3.push( result.value )
    }
}
console.log(fibs3)