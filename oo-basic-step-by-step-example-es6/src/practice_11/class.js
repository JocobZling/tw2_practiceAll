class Class {
    constructor(number) {
        this.number = number;
        this.leader = "";
        this.teathers = [];
    }

    assignLeader(Student) {
        if (Student.klass === this.number) {
            this.leader = Student.name;
            for (let teather of this.teathers) {
                teather.print(Student.name, this.number, 'leader');
            }
        }
        else {
            console.log('It is not one of us.');
        }
    }

    appendMember(Student) {
        Student.klass = this.number;
        Student.inClass = this;
        for (let teather of this.teathers) {
            teather.print(Student.name, this.number, 'join');
        }
    }

    isIn(Student) {
        if (Student.klass === this.number)
            return true;
        else
            return false;
    }
}

module.exports = Class;
