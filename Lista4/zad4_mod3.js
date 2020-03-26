var module1 = require('./zad4_mod1');

function Module3() {
}

Module3.hello = function () {
    console.log("Alusia w 3");
   module1.hello();
};

Module3.hello2 = function () {
    console.log("Alusia w 3_2");
   module2.hello2();
};

module.exports = Module3;