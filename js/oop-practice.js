// STEP 1
// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const Dog = class {
//     constructor(name) {
//         this.name = name;
//     }
// };

// STEP 2
// const myCat = new Cat();
// const myDog = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         this.display = function () {
//             console.log("The Animal has been created");
//         };
//     }
//  }
//  let animal = new Animal();
//  animal.display();

// STEP 4
// class Animal {
//     constructor(msg) {
//         this.msg = msg;
//         this.display = function () {
//             console.log(this.msg);
//         };
//     }
//  }
//  let animal = new Animal("The Animal has been created");
//  animal.display();

// STEP 5
//class Animal {
//    constructor(type, breed, color, height, length) {
//        this.type = type;
//        this.breed = breed;
//        this.color = color;
//        this.height = height;
//        this.length = length;
//    }
//}

// STEP 6
// const myAnimal = new Animal('Dog', 'Labrador', 'Yellow', '60cm', '120cm');
// for (let property in myAnimal) {
//     console.log(`${property}: ${myAnimal[property]}`);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }

//     speak() {
//         if (this.type.toLowerCase() === 'dog') {
//             return `The ${this.color} dog is barking!`;
//         } else if (this.type.toLowerCase() === 'cat') {
//             return `The ${this.color} cat is meowing!`;
//         }
//     }
// }

// const animal1 = new Animal('dog', 'Labrador', 'yellow', '60cm', '120cm');
// console.log(animal1.speak());

// const animal2 = new Animal('cat', 'Ragdoll', 'white', '30cm', '50cm');
// console.log(animal2.speak());

// STEP 8
// class Animal {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;

//     constructor(type, breed, color, height, length) {
//         this.#type = type;
//         this.#breed = breed;
//         this.#color = color;
//         this.#height = height;
//         this.#length = length;
//     }

//     #checkType() {
//         if (this.#type.toLowerCase() === 'dog') {
//             return 'dog';
//         } else {
//             return 'cat';
//         }
//     }

//     speak() {
//         const animalType = this.#checkType();
//         return `The ${animalType} has made a noise!`;
//     }
// }

// const animal3 = new Animal('dog', 'Labrador', 'yellow', '60cm', '120cm');
// console.log(animal3.speak());

// const animal4 = new Animal('cat', 'Ragdoll', 'white', '30cm', '50cm');
// console.log(animal4.speak());

// STEP 9
// String.prototype.findWords = function(word) {
//     const regex = new RegExp(word, 'gi');
//     const matches = this.match(regex);
//     if (matches) {
//         alert(`The word "${word}" was found ${matches.length} times.`);
//     } else {
//         alert(`The word "${word}" was not found.`);
//     }
// };
// const text = prompt("Enter a paragraph of text");
// const word = prompt("Enter a search word");
// text.findWords(word);
