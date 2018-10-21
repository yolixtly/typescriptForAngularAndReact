export default class User {
    constructor(public _name: string, protected age?: number) {
    }

    public sayHi() {
        console.log("Hi, I am: " + this._name + ". I was born in: " + this.calculateBirthYear());
    }

    private calculateBirthYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - (this.age || 0);
    }
    /**
     * Read only method for a Protected property
     */
    // get name() {
    //     return this._name;
    // }

    set name(newName) {
        console.log("Your name has been updated to: " + newName);
        this._name = newName;
    }
}
