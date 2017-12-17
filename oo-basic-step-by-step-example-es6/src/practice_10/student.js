import Person from "./person.js";

class Student extends Person{
    constructor(id,name,age,className) {
        super(id,name,age);
        this.className = className;
    }

    introduce(){
        let res = super.introduce();
        if(typeof(this.className.leader) === "undefined")
            res =`${res} I am a Student. I am at Class ${this.className.number}.`;
        else
            res = `${res} I am a Student. I am Leader of Class ${this.className.number}.`;;
        return res;
    }
}
exports["default"] = Student;
module.exports = exports["default"];








