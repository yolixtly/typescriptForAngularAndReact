export default class User {
    public name: string;
    public age: number;

    constructor(name: string, age?: number) {
        // Define the name and age of the Class instance
        this.name = name;
        this.age = age || 0;
    }

    public sayHi() {
        console.log("Hi, I am: " + this.name + ". I was born in: " + this.calculateBirthYear());
    }
    private calculateBirthYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - (this.age);
    }
}
