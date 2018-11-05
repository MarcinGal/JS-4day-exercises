
// class Cat {
//     constructor() {
//         this.sound = 'Meoww!';
//     }
//     makeSound() { console.log(this.sound) };
//     changeSound(sound) {this.sound = sound };
// }

// const cat = new Cat()

// cat.makeSound()

// cat.changeSound('Kłaczek')

// cat.makeSound()

function Cat(){this.sound = 'Meoww!'};
Cat.prototype.makeSound = function(){ console.log(this.sound) };
Cat.prototype.changeSound= function(sound) {this.sound = sound };

const cat = new Cat;

cat.makeSound()

cat.changeSound('Kłaczek')

cat.makeSound()