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
const janeDoes = new User();
janeDoes.name = "Jane Does";
janeDoes.age = 28;
janeDoes.sayHi();

// Constructors
// Access modifiers
// Properties
// Modules
