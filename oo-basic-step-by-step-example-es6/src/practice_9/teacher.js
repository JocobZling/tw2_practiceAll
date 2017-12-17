import Person from "./person.js"
class Teacher extends Person{
    constructor(id,name,age,className) {
        super(id,name,age);
        this.className = className;
    }

    introduce(){
        let res = super.introduce();

        if(typeof this.className === 'undefined')
            res += ` I am a Teacher. I teach No Class.`;
        else
            res += ` I am a Teacher. I teach Class ${this.className.number}.`;

        return res;
    }
}

exports["default"] = Teacher;
module.exports = exports["default"];



