"use strict";
var Human = (function () {
    function Human(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Human.prototype.greet = function (msg) {
        return msg;
    };
    return Human;
}());
var human1 = new Human('harsh bantai', 21, ['eating', 'sleeping', 'coding', 'gaming']);
console.log(human1);
//# sourceMappingURL=app.js.map