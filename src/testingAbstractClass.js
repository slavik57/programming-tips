// The video for this file:
// https://youtu.be/sGRlyBSgi1Q
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    feed(food) {
        if (this.favoriteFoods.indexOf(food) >= 0) {
            return this.sound;
        }
        return null;
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    get sound() {
        return 'Woof!';
    }
    get favoriteFoods() {
        return ['meat', 'bone'];
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    get sound() {
        return 'Meow!';
    }
    get favoriteFoods() {
        return ['milk', 'cream'];
    }
    pet() {
        return 'prrrr';
    }
}
exports.Cat = Cat;
function testAnimal(animal) {
    testAnimalShouldMakeSound(animal);
    testAnimalShouldNotMakeSound(animal);
}
function testAnimalShouldMakeSound(animal) {
    animal.favoriteFoods.forEach(food => {
        const sound = animal.feed(food);
        console.log(`>When fed with ${food} should make sound ${animal.sound}:`, sound === animal.sound);
    });
}
function testAnimalShouldNotMakeSound(animal) {
    const sound = animal.feed('Unknow food');
    console.log(`>When fed with unknown food should not make sound:`, sound === null);
}
function testDog() {
    console.log('===testing dog===');
    const dog = new Dog();
    testAnimal(dog);
}
testDog();
function testCat() {
    console.log('===testing cat===');
    const cat = new Cat();
    testAnimal(cat);
    console.log('--cat specific tests--');
    const sound = cat.pet();
    console.log(`>When pet the cat should make a prrr sound:`, sound === 'prrrr');
}
testCat();
