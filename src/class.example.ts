export default class User {
    constructor(private name: string, protected age?: number) {
    }

    public sayHi() {
        console.log("Hi, I am: " + this.name + ". I was born in: " + this.calculateBirthYear());
    }

    public updateName(newName) {
        this.name = newName;
        console.log("Your name has been updated to: " + newName);
    }

    private calculateBirthYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - (this.age || 0);
    }
}
