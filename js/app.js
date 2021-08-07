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

      if (this.age >= 5) {
        gameImage.src = "Tomagotchi Images/happy bot 2.jpg"
      }

      if (this.age >= 15) {
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
      hunger.style.color = "snow"

      if (this.hunger > 5) {
        gameImage.src = "Tomagotchi Images/mad bot.jpg"
        hunger.style.color = "firebrick"
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
        sleepiness.style.color = "firebrick"
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
      boredom.style.color = "snow"

      if (this.boredom > 5) {
        gameImage.src = "Tomagotchi Images/dot dot dot bot.jpg"
        boredom.style.color = "firebrick"
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
    setTimeout(originalStyle, 2500)
  }
  sleep() {
    this.sleepiness = 0
    attributeStyle()
    gameImage.src = "Tomagotchi Images/sleep sheep.jpg"
    setTimeout(originalStyle, 2500)
  }
  exercise() {
    this.boredom = 0
    attributeStyle()
    gameImage.src = "Tomagotchi Images/exercise kids.jpg"
    setTimeout(originalStyle, 2500)
  }
  move() {
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
  pet.move()
}

function endGame() {
  this.dead = true
  gameImage.style.animation = "none"
  gameImage.src = "Tomagotchi Images/death bot.jpg"
  attributes.style.display = 'none'
  gameButtons.style.display = 'none'
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

  if (this.age >= 5) {
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
});

eatButton.addEventListener('click', function() {
  pet.eat()
  document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4375909.jpg')";
});

sleepButton.addEventListener('click', function() {
  pet.sleep()
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')";
});

exerciseButton.addEventListener('click', function() {
  pet.exercise()
  document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/4/58/o2FaRs.jpg')";
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
