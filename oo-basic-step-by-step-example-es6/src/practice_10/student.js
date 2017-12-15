import Person from "./person.js";

class Student extends Person {
    constructor(id, name, age, Class) {
        super(id, name, age);
        this.klass = Class.number;
        this.inClass = Class;
    }

    introduce() {
        if (this.inClass.leader === this.name) {
            return super.introduce() + " I am a Student. I am Leader of Class " + this.klass + "."
        }
        else {
            return super.introduce() + " I am a Student. I am at Class " + this.klass + ".";
        }
    }
}

module.exports = Student;