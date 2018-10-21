export default class User {
    public name: string;
    public age: number;
    public sayHi() {
        console.log("Hi, I am: " + this.name + ". I was born in: " + this.calculateBirthYear());
    }
    private calculateBirthYear(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - (this.age || 0);
    }
}
