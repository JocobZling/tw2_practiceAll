class Class{
    constructor (number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student,teacher){
        if(student.className.number === this.number){
            this.leader = student;
            if(typeof(teacher)!== 'undefined')
                  teacher.registerAssignLeaderListener(student);
        }
        else
            console.log("It is not one of us.");
    }

    appendMember(student,teacher){
        student.className = this;
        if(typeof(teacher)!== 'undefined')
             teacher.registerJoinListener(student);
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



