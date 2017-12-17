import Person from "./person.js"
class Teacher extends Person{
    constructor(name,age,className) {
        super(name,age);
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

    introduceWith(student){
        let res = super.introduce() + ` I am a Teacher. `;
      if(student.className.number === this.className.number)
          res+=`I teach ${student.name}.`;
      else
          res+=`I don't teach ${student.name}.`;
      return res;
    }
}

exports["default"] = Teacher;
module.exports = exports["default"];

