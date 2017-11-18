const {
    computed,
    action,
    observable,
    autorun
} = mobx;

// Go here next: http://bit.ly/diy-observable

class Person {
    @observable firstName;
    @observable lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @computed get fullName() {
        return this.firstName +
            ' ' +
            this.lastName;
    }
}

const person = new Person('Steve', 'Kinney');
const quote = observable(
    'Only JavaScript can prevent forest fires.'
);

const render = () => {
    document.body.innerText =
        person.fullName +
        ' : ' +
        quote;
}

autorun(render);