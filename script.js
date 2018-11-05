
class Cat {
    constructor() {
        this.sound = 'Meoww!';
    }
    makeSound() { console.log(this.sound) };
    changeSound(sound) {this.sound = sound };
}

const cat = new Cat()

cat.makeSound()

cat.changeSound('Kłaczek')

cat.makeSound()