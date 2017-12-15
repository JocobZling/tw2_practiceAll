import Person from "./person.js";

class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }

    basicIntroduce() {
        return "My name is " + this.name + ". I am " + this.age + " years old."
    }

    introduce() {
        let introduce = new Worker(this.name, this.age).basicIntroduce();
        return introduce + " I am a Worker. I have a job."
    }
}

module.exports = Worker;