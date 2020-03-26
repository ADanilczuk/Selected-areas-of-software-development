var Foo = function (foo) {
    this.a = foo
};

Foo.prototype.Bar = (function () {
    // Private methods
    function Qux() {
        return " tu prywatnie"
    }

    // Public attributes and methods
    return function () {
            return " A tu publicznie" + Qux()
        
    };
})();

    

var myObject = new Foo('Aluś');
console.log(myObject.a)  
console.log(myObject.Bar())
console.log(myObject.Bar.Qux())  