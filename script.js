
// 1)
// function Cat(){
//     this.makeSound = () => console.log('Meowww!')
// }


// const cat = new Cat()

// cat.makeSound()

// class Cat {
//     makeSound() { console.log('Meowww!') }
// }

// const cat = new Cat()
// cat.makeSound()

makeCat = () => {
    return {
        makeSound: () => console.log('Meow!')
    }
}
const cat = makeCat();
cat.makeSound()
