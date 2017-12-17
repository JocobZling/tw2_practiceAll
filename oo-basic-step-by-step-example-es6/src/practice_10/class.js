class Class{
    constructor (number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if(student.className.number === this.number)
            this.leader = student;
        else
            console.log("It is not one of us.");
    }

    appendMember(student){
        student.className = this;
    }

    isIn(student)
    {
        if(student.className.number === this.number)
            return true;
        else
            return false;
    }
}
exports["default"] = Class;
module.exports = exports["default"];


