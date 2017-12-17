import Person from "./person.js";

class Student extends Person{
    constructor(name,age,className) {
        super(name,age);
        this.className = className;
    }

    introduce(){
        let personStr = super.introduce();
        return `${personStr} I am a Student. I am at Class ${this.className.number}.`;
    }
}
exports["default"] = Student;
module.exports = exports["default"];





