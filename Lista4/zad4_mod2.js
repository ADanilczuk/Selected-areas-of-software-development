var module3 = require('./zad4_mod3');

function Module2() {
}

Module2.hello = function () 
{
    console.log("Alusia w 2");
    module3.hello2();
};

Module2.hello2 = function () 
{
    console.log("Alusia w 2_2");
    module3.hello();
};

module.exports = Module2;