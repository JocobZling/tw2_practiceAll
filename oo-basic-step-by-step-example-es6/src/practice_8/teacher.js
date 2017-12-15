import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass == null) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klass + ".";
        }
    }

    introduceWith(Student) {
        if (Student.klass === this.klass) {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                + Student.name + ".";
        }
        else {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                "teach " + Student.name + ".";
        }

    }
}

module.exports = Teacher;