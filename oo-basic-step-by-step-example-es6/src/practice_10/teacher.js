import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
        for (let klass of klasses) {
            klass.teathers.push(this);
        }
    }

    introduce() {
        let klassesSum = new String();
        let result = new String();
        for (let index = 0; index < this.klasses.length; index++) {
            if (index === this.klasses.length - 1)
                klassesSum += this.klasses[index].number;
            else
                klassesSum += this.klasses[index].number + ', ';
        }
        if (this.klasses.length === 0)
            result = super.introduce() + ' I am a Teacher. I teach No Class.';
        else {
            result = super.introduce() + ` I am a Teacher. I teach Class ${klassesSum}.`;

        }
        return result;
    }

    introduceWith(Student) {
        for (let a of this.klasses) {
            if (Student.klass === a.number) {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach "
                    + Student.name + ".";
            }
            else {
                return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I don't " +
                    "teach " + Student.name + ".";
            }
        }

    }

    isTeaching(Student) {
        for (let klass of this.klasses) {
            if (klass.isIn(Student))
                return true;
        }
        return false;
    }
}

module.exports = Teacher;
