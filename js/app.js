console.log("TOMAGOTCHI PROJECT 0");

// Input name function and listener
let inputName = document.querySelector('#char-name')
inputName.addEventListener("click", (event) => {
  event.preventDefault();
  let charName = document.querySelector('#new-name').value
  document.querySelector("h2").innerHTML = `${charName}`
})

let petName = document.querySelector("h2").innerHTML

// Tomagotchi class
class Tomagotchi {
  constructor(name) {
    this.name = name
    this.hunger = 1
    this.sleepiness = 1
    this.boredom = 1
    this.age = 1
    this.dead = false
  }
  getOlder() {
    setInterval(() => {
      age.innerHTML = `Age: ${this.age}`
      this.age++
    }, 15000)

    console.log(this.age);
  }
  getHungry() {
    setInterval(() => {
      hunger.innerHTML = `Hunger: ${this.hunger}`
      this.hunger++
    }, 3000)
  }
  getSleepy() {
    setInterval(() => {
      sleepiness.innerHTML = `Sleepiness: ${this.sleepiness}`
      this.sleepiness++
    }, 5000)
  }
  getBored() {
    setInterval(() => {
      boredom.innerHTML = `Boredom: ${this.boredom}`
      this.boredom++
    }, 2500)
  }
  exercise() {

  }
  move() {

  }
}

function startGame() {
  const pet = new Tomagotchi(petName)
  pet.getOlder()
  pet.getHungry()
  pet.getSleepy()
  pet.getBored()
}


// Game buttons
const playButton = document.querySelector("#play")
const eatButton = document.querySelector("#eat")
const sleepButton = document.querySelector("#sleep")
const exerciseButton = document.querySelector("#exercise")

// Game button event listerners
playButton.addEventListener('click', function() {

});

eatButton.addEventListener('click', function() {

});

sleepButton.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')";
});

exerciseButton.addEventListener('click', function() {

})

// Attributes
const age = document.querySelector("#age")
age.innerHTML = `Age`

const hunger = document.querySelector("#hunger")
hunger.innerHTML = `Hunger`

const sleepiness = document.querySelector("#sleepiness")
sleepiness.innerHTML = `Sleepiness`

const boredom = document.querySelector("#boredom")
boredom.innerHTML = `Boredom`

startGame()
