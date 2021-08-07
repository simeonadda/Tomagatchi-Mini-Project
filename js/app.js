console.log("TOMAGOTCHI PROJECT 0");

// Input name function and listener
let inputName = document.querySelector('#char-name')
inputName.addEventListener("click", (event) => {
  event.preventDefault();
  let charName = document.querySelector('#new-name').value
  document.querySelector("h2").innerHTML = `${charName}`
})

function hideForm() {
  const form = document.querySelector("#form")
  form.style.display = 'none'
  showStart()
}

let petName = document.querySelector("h2").innerHTML

// Tomagotchi class
class Tomagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 0
    this.sleepiness = 0
    this.boredom = 0
    this.age = 1
    this.dead = false
    this.time = 0
  }
  getOlder() {
    let gameImage = document.querySelector(".game-image")
    let count = setInterval(() => {
      this.age++
      age.innerHTML = `Age: ${this.age}`

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 15) {
        gameImage.src = "Tomagotchi Images/transform bot 2.jpg"
      }

      if (this.age === 25) {
        clearInterval(count)
        this.dead = true
        gameImage.src = "Tomagotchi Images/death bot.jpg"
        endGame()
      }
    }, 10000)
  }
  getHungry() {
    let gameImage = document.querySelector(".game-image")
    let count = setInterval(() => {
      this.hunger++
      hunger.innerHTML = `Hunger: ${this.hunger}`

      if (this.hunger > 4) {
        gameImage.src = "Tomagotchi Images/sad bot.jpg"
      }

      if (this.hunger > 7) {
        gameImage.src = "Tomagotchi Images/mad bot.jpg"
      }

      if (this.hunger === 10) {
        clearInterval(count)
        gameImage.src = "Tomagotchi Images/death bot.jpg"
        endGame()
      }
    }, 1000)
  }
  getSleepy() {
    let gameImage = document.querySelector(".game-image")
    let count = setInterval(() => {
      this.sleepiness++
      sleepiness.innerHTML = `Sleepiness: ${this.sleepiness}`

      if (this.sleepiness > 4) {
        gameImage.src = "Tomagotchi Images/sad bot.jpg"
      }

      if (this.sleepiness > 7) {
        gameImage.src = "Tomagotchi Images/exclamation bot.jpg"
      }

      if (this.sleepiness === 10) {
        clearInterval(count)
        gameImage.src = "Tomagotchi Images/death bot.jpg"
        endGame()
      }
    }, 5000)
  }
  getBored() {
    let gameImage = document.querySelector(".game-image")
    let count = setInterval(() => {
      this.boredom++
      boredom.innerHTML = `Boredom: ${this.boredom}`

      if (this.boredom > 4) {
        gameImage.src = "Tomagotchi Images/sad bot.jpg"
      }

      if (this.boredom > 7) {
        gameImage.src = "Tomagotchi Images/exclamation bot.jpg"
      }

      if (this.boredom === 10) {
        clearInterval(count)
        gameImage.src = "Tomagotchi Images/death bot.jpg"
        endGame()
      }
    }, 3000)
  }
  play() {
    this.boredom = 0
    this.hunger++
    let gameImage = document.querySelector(".game-image")
    gameImage.src = "Tomagotchi Images/excited bot.jpg"
    setTimeout(() => {
      gameImage.src = "Tomagotchi Images/happy bot.jpg"

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 15) {
        gameImage.src = "Tomagotchi Images/transform bot 2.jpg"
      }
    }, 2500)
  }
  eat() {
    this.hunger = 0
    let gameImage = document.querySelector(".game-image")
    gameImage.src = "Tomagotchi Images/food.jpg"
    setTimeout(() => {
      gameImage.src = "Tomagotchi Images/happy bot.jpg"

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 15) {
        gameImage.src = "Tomagotchi Images/transform bot 2.jpg"
      }
    }, 2500)
  }
  sleep() {
    this.sleepiness = 0
    let gameImage = document.querySelector(".game-image")
    gameImage.src = "Tomagotchi Images/sleep sheep.jpg"
    setTimeout(() => {
      gameImage.src = "Tomagotchi Images/happy bot.jpg"

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 15) {
        gameImage.src = "Tomagotchi Images/transform bot 2.jpg"
      }
    }, 2500)
  }
  exercise() {
    this.boredom = 0
    let gameImage = document.querySelector(".game-image")
    gameImage.src = "Tomagotchi Images/exercise.jpg"
    setTimeout(() => {
      gameImage.src = "Tomagotchi Images/happy bot.jpg"

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 15) {
        gameImage.src = "Tomagotchi Images/transform bot 2.jpg"
      }
    }, 2500)
  }
  move() {
  }
}

const pet = new Tomagotchi(petName)

function startGame() {
  pet.getOlder()
  pet.getHungry()
  pet.getSleepy()
  pet.getBored()
  pet.move()
}

function endGame() {
  return
}


// Game buttons
const playButton = document.querySelector("#play")
const eatButton = document.querySelector("#eat")
const sleepButton = document.querySelector("#sleep")
const exerciseButton = document.querySelector("#exercise")

// Game button event listerners
playButton.addEventListener('click', function() {
  pet.play()

  document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/4199031.jpg')";
});

eatButton.addEventListener('click', function() {
  pet.eat()

  document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/4199031.jpg')";
});

sleepButton.addEventListener('click', function() {
  pet.sleep()

  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')";
});

exerciseButton.addEventListener('click', function() {
  pet.exercise()

  document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/4199031.jpg')";
})

// Attributes
const age = document.querySelector("#age")
const hunger = document.querySelector("#hunger")
const sleepiness = document.querySelector("#sleepiness")
const boredom = document.querySelector("#boredom")

// Start Button
const startButton = document.querySelector("#start-button")
startButton.addEventListener('click' , startGame)

function showStart() {
  startButton.style.display = 'initial'
}
