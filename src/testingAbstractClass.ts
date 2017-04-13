// The video for this file:
// https://youtu.be/sGRlyBSgi1Q

export abstract class Animal {
  abstract get sound(): string;
  abstract get favoriteFoods(): string[];

  feed(food: string): string {
    if (this.favoriteFoods.indexOf(food) >= 0) {
      return this.sound;
    }

    return null;
  }
}

export class Dog extends Animal {
  get sound(): string {
    return 'Woof!';
  }
  get favoriteFoods(): string[] {
    return ['meat', 'bone'];
  }
}
export class Cat extends Animal {
  get sound(): string {
    return 'Meow!';
  }
  get favoriteFoods(): string[] {
    return ['milk', 'cream'];
  }

  pet(): string {
    return 'prrrr';
  }
}

function testAnimal(animal: Animal) {
  testAnimalShouldMakeSound(animal);
  testAnimalShouldNotMakeSound(animal);
}

function testAnimalShouldMakeSound(animal: Animal) {
  animal.favoriteFoods.forEach(food => {
    const sound = animal.feed(food);
    console.log(`>When fed with ${food} should make sound ${animal.sound}:`,
      sound === animal.sound);
  });
}

function testAnimalShouldNotMakeSound(animal: Animal){
  const sound = animal.feed('Unknow food');
  console.log(`>When fed with unknown food should not make sound:`,
    sound === null);
}

function testDog(){
  console.log('===testing dog===');
  const dog = new Dog();
  testAnimal(dog);
}

testDog();

function testCat(){
  console.log('===testing cat===');
  const cat = new Cat();
  testAnimal(cat);

  console.log('--cat specific tests--');
  const sound = cat.pet();
  console.log(`>When pet the cat should make a prrr sound:`,
    sound === 'prrrr')
}

testCat();