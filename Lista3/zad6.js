function createGeneratororg() {
    var _state = 0;
    return {
        next : function() {
            return {
                value : _state,
                done : _state++ >= 10
                }
            }
        }
    }
    


function createGenerator(x) {
    var _state = 0;
    return {
        next : function() 
                {
                    if (_state <= x) 
                    {   return {value : _state++ }}
                    else 
                    { return {done : true }}
                }
        }
}

var foo = {
    [Symbol.iterator] : createGeneratororg
};
   

var foo1 = 
{
    [Symbol.iterator] : createGenerator.bind(this, 5)
}

var foo2 = 
{
    [Symbol.iterator] : createGenerator.bind(this, 15)
}
var foo3 = 
{
    [Symbol.iterator] : createGenerator.bind(this, 8)
}

for ( var f of foo1 )
    console.log("5: "+f);
    
for ( var f of foo2 )
    console.log("15: "+f);

for ( var f of foo3 )
    console.log("8: "+f);

for ( var f of foo )
    console.log("10: "+f);