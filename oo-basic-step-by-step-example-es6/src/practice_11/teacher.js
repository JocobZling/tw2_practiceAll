import Person from "./person.js"
class Teacher extends Person{
    constructor(id,name,age,classes) {
        super(id,name,age);
        this.classes = classes;
    }

    introduce(){
        let res = super.introduce()+` I am a Teacher. `;
        let str = "";

        if(typeof(this.classes) === 'undefined')
            res += `I teach No Class.`;
        else{
            this.classes.forEach((item,index,inputs) =>{
                if(index !== inputs.length-1)
                    str+=` ${item.number},`;
                else
                    str+=` ${item.number}`;
            });
            res += `I teach Class${str}.`;
        }
        return res;
    }

    isTeaching(student){
        this.classes.forEach(item => {
            if(item.isIn(student))
                return true;
        });
        return false;
    }

    registerAssignLeaderListener(student)
    {
        console.log(`I am ${this.name}. I know ${student.name} become Leader of Class ${student.className.number}.`);
    }

    registerJoinListener(student)
    {
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${student.className.number}.`);
    }

}

exports["default"] = Teacher;
module.exports = exports["default"];

