export default class User {
    public name: string;
    protected age: number;

    constructor(name: string, age?: number) {
        // Define the name and age of the Class instance
        this.name = name;
        this.age = age || 0;
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
        return currentYear - (this.age);
    }
}
