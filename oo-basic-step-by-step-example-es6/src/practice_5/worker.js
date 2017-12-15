import Person from "./person.js";

class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        let introduce = new Worker(this.name, this.age).basicIntroduce();
        return introduce + " I am a Worker. I have a job."
    }
}

module.exports = Worker;