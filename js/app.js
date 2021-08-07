console.log("TOMAGOTCHI PROJECT 0");

// Input name function and listener
let inputName = document.querySelector('#char-name')
inputName.addEventListener("click", (event) => {
  event.preventDefault();
  let charName = document.querySelector('#new-name').value
  document.querySelector("h2").innerHTML = `${charName}`
})

const form = document.querySelector("#form")
function hideForm() {
  form.style.display = 'none'
  showStart()
}

let petName = document.querySelector("h2").innerHTML
let gameImage = document.querySelector(".game-image")
let gameBackground = document.querySelector("#game")

// Tomagotchi class
class Tomagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 0
    this.sleepiness = 0
    this.boredom = 0
    this.age = 0
    this.dead = false
  }
  getOlder() {
    let count = setInterval(() => {
      this.age++
      age.innerHTML = `Age: ${this.age}`
      age.style.color = "snow"

      if (this.age >= 5 && this.age < 15) {
        gameImage.src = "Tomagotchi Images/happy bot 2.jpg"
      }

      if (this.age >= 15 && this.age < 25) {
        gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
      }

      if (this.age >= 25 || this.hunger >= 10 || this.sleepiness >=10 || this.boredom >= 10) {
        clearInterval(count)
        endGame()
      }
    }, 10000)
  }
  getHungry() {
    let count = setInterval(() => {
      this.hunger++
      hunger.innerHTML = `Hunger: ${this.hunger}`

      if (this.hunger > 5) {
        gameImage.src = "Tomagotchi Images/mad bot.jpg"
        hunger.style.color = "snow"
      }

      if (this.hunger > 5 && this.age >= 5) {
        gameImage.src = "Tomagotchi Images/mature dot dot dot bot.jpg"
        hunger.style.color = "firebrick"
      }

      if (this.age >= 25 || this.hunger >= 10 || this.sleepiness >=10 || this.boredom >= 10) {
        clearInterval(count)
        endGame()
      }
    }, 3000)
  }
  getSleepy() {
    let count = setInterval(() => {
      this.sleepiness++
      sleepiness.innerHTML = `Sleepiness: ${this.sleepiness}`
      sleepiness.style.color = "snow"

      if (this.sleepiness > 5) {
        gameImage.src = "Tomagotchi Images/sad bot.jpg"
        sleepiness.style.color = "snow"
      }

      if (this.sleepiness > 5 && this.age >= 5) {
        gameImage.src = "Tomagotchi Images/mature dot dot dot bot.jpg"
        hunger.style.color = "firebrick"
      }

      if (this.age >= 25 || this.hunger >= 10 || this.sleepiness >=10 || this.boredom >= 10) {
        clearInterval(count)
        endGame()
      }
    }, 5000)
  }
  getBored() {
    let count = setInterval(() => {
      this.boredom++
      boredom.innerHTML = `Boredom: ${this.boredom}`

      if (this.boredom > 5) {
        gameImage.src = "Tomagotchi Images/dot dot dot bot.jpg"
        boredom.style.color = "snow"
      }

      if (this.boredom > 5 && this.age >= 5) {
        gameImage.src = "Tomagotchi Images/mature dot dot dot bot.jpg"
        hunger.style.color = "firebrick"
      }

      if (this.age >= 25 || this.hunger >= 10 || this.sleepiness >=10 || this.boredom >= 10) {
        clearInterval(count)
        endGame()
      }
    }, 7000)
  }
  play() {
    this.boredom = 0
    this.hunger++
    attributeStyle()
    gameImage.src = "Tomagotchi Images/38767555.jpg"
    setTimeout(originalStyle, 3000)
  }
  eat() {
    this.hunger = 0
    attributeStyle()
    gameImage.src = "Tomagotchi Images/food.jpg"
    setTimeout(originalStyle, 3000)
  }
  sleep() {
    this.sleepiness = 0
    attributeStyle()
    gameImage.src = "Tomagotchi Images/sleep sheep.jpg"
    setTimeout(originalStyle, 3000)
  }
  exercise() {
    this.boredom = 0
    attributeStyle()
    gameImage.src = "Tomagotchi Images/exercise kids.jpg"
    setTimeout(originalStyle, 3000)
  }
}



// Start & End Game
const pet = new Tomagotchi()

function startGame() {
  hideStart()
  showAttributes()
  showGameButtons()
  pet.getOlder()
  pet.getHungry()
  pet.getSleepy()
  pet.getBored()
}

function endGame() {
  this.dead = true
  gameImage.style.animation = "none"
  gameImage.src = "Tomagotchi Images/death bot.jpg"
  attributes.style.display = 'none'
  gameButtons.style.display = 'none'
  document.querySelector("h2").innerHTML= "Do you want to play again?"
  showRestart()
}

// Style functions
function attributeStyle() {
  gameImage.style.animation = "none"
  gameBackground.style.backgroundColor = "rgb(38, 38, 38)"
}

function originalStyle() {
  gameImage.style.animation = "mymove 1s infinite alternate"
  gameBackground.style.backgroundColor = "rgb(51, 51, 51)"

  if (this.age >= 5 && this.age < 15) {
    gameImage.src = "Tomagotchi Images/happy bot 2.jpg"
    gameBackground.style.backgroundColor = "rgb(51, 51, 51)"
  } else if (this.age >= 15) {
    gameImage.src = "Tomagotchi Images/transform bot 1.jpg"
    gameBackground.style.backgroundColor = "rgb(51, 51, 51)"
  } else {
    gameImage.src = "Tomagotchi Images/happy bot.jpg"
  }
}

// Game buttons
const playButton = document.querySelector("#play")
const eatButton = document.querySelector("#eat")
const sleepButton = document.querySelector("#sleep")
const exerciseButton = document.querySelector("#exercise")

// Game button event listerners
playButton.addEventListener('click', function() {
  pet.play()
  document.body.style.backgroundImage = "url('https://www.teahub.io/photos/full/299-2991621_laptop-wallpapers-79-hd-laptop-wallpapers-on-wallpaperplay.jpg')";
  document.body.style.color = "snow";
});

eatButton.addEventListener('click', function() {
  pet.eat()
  document.body.style.backgroundImage = "url('http://xdesktopwallpapers.com/wp-content/uploads/2011/11-1/Ready-To-Eat.jpg')";
});

sleepButton.addEventListener('click', function() {
  pet.sleep()
  document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/2044030.jpg')";
  document.body.style.color = "snow";
});

exerciseButton.addEventListener('click', function() {
  pet.exercise()
  document.body.style.backgroundImage = "url('https://coolwallpapers.me/picsup/3052480-barbell_black_body-builder_dumbbell_fitness-equipment_fitness-room_fitness-studio_muscle-training_power-sports_sport_strength-training_train_weight-plates_weights.jpg')"
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

function hideStart() {
  startButton.style.display = 'none'
}

const restartButton = document.querySelector("#restart")
function showRestart() {
  restartButton.style.display = 'flex'
}

// Reveal Attributes & Game Buttons

function showAttributes() {
  const attributes = document.querySelector("#attributes")
  attributes.style.display = 'flex'
}

const gameButtons = document.querySelector("#game-buttons")
function showGameButtons() {
  gameButtons.style.display = 'flex'
}
