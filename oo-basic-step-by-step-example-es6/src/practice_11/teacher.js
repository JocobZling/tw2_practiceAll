import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;//数组
        for (let klass of klasses) {
            klass.teathers.push(this);//遍历之后拥有该属性
        }
    }

    introduce() {
        let classString = "";
        if (this.klasses.length == 0 || this.klasses == null) {
            classString = 'No Class';
        } else {
            let Class = "Class ";
            let classArr = [];
            for (let klass of this.klasses) {
                classArr.push(klass.number);
            }
            classString = Class + classArr.join(',');
        }
        return `${super.introduce()} I am a Teacher. I teach ${classString}.`;
    }

    introduceWith(Student) {
        for (let a of this.klasses) {
            if (Student.klass === a.number) {
                return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${Student.name}.`;
            }
            else {
                return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I don't teach ${Student.name}.`;
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

    //打印學生進入和成為了leader老师的打印(合并)
    print(student, klass, action) {
        if (action === 'join') {
            console.log(`I am ${this.name}. I know ${student} has joined Class ${klass}.`)
        }
        if (action === 'leader') {
            console.log(`I am ${this.name}. I know ${student} become Leader of Class ${klass}.`);
        }
    }
}

module.exports = Teacher;