console.log("TOMAGOTCHI PROJECT 0");

class Tomagotchi {
  constructor(name) {
    this.name = name
    this.hunger = null
    this.sleepiness = null
    this.boredom = null
    this.age = 0
  }
  ageUp() {
    setInterval(function() {
      this.age++
    }, 10000)
  }
  eat() {

  }
  sleep() {

  }
  play() {

  }
  exercise() {

  }
}

const sim = new Tomagotchi("Sim")

// var nameValue = document.querySelector("#new-name").value;
// nameElement = document.createElement("h2")
// nameElement.id = "charName";
// gameBox = document.querySelector("#game")
// nameElement.appendChild(nameValue)
// gameBox.appendChild(nameElement)

sim.ageUp()
console.log(sim.age);
