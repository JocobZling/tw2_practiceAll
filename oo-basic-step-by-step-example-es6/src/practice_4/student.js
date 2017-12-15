import Person from "./person.js";

class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    basicIntroduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }

    introduce() {
        let introduce = new Student(this.name, this.age, this.klass).basicIntroduce();
        return introduce + " I am a Student. I am at Class " + this.klass + ".";
    }
}

module.exports = Student;