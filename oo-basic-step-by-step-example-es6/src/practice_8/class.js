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
    }
}
exports["default"] = Class;
module.exports = exports["default"];
