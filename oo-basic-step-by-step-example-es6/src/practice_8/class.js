class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
    }

    assignLeader(Student) {
        this.leader = Student.name;
    }
}

module.exports = Class;
