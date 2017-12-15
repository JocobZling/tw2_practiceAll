class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
        this.teathers = [];
    }

    assignLeader(Student) {
        if (Student.klass === this.number) {
            this.leader = Student.name;
        }
        else {
            console.log('It is not one of us.');
        }
    }

    appendMember(Student) {
        Student.klass = this.number;
        Student.inClass = this;
    }

    isIn(student) {
        if (student.klass === this.number)
            return true;
        else
            return false;
    }
}

module.exports = Class;
