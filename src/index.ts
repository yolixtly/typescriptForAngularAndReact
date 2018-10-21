// Initial Test
import logMessage from "./example.main";
logMessage("Hello World");

// Type annotations
import count from "./type-annotations.example";
// count("bla");
count(2 + 1, [1, 2, 3]);

// Arrow Functions
// Interfaces
import drawPoints from "./arrow-functions.example";

drawPoints({
    x: 3,
    y: 4,
});

// Classes
import User from "./class.example";
// We need to alocate memory to this class by creating an instance with the new keyword and the
// custom information for the instance of the class
// Constructors are required to alocate data
const janeDoes = new User("Jane Does", 28);
// Public Method
janeDoes.sayHi();
// Private method. Cannot be called
// janeDoes.calculateBirthYear();

// Access modifiers
janeDoes.updateName("JaneDodiiie");
// Protected Property cannot be modified after set
// janeDoes.age = 24;

// Access modifiers
// Properties
// Modules
