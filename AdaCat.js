class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.isFed = false
    this.isPlaying = false
    this.size = 30
    this.message = ""
  }

  getDescription() {
    var messageLine
    if (this.isSleeping) {
      messageLine = 'Shh! ' + this.name + ' is sleeping.'
    } else if (this.isFed) {
      this.isFed = false
      messageLine = this.name + ' just ate food.'
    } else if (this.isPlaying){
      this.isPlaying = false
      messageLine = this.name + ' is playing.'
    } else{
      messageLine = this.name + ' is awake.'
    }

    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' kilograms.',
      'their health is ' + this.getHealth() + '/30.',
      messageLine
    ]

    return lines.join('\n')
  }

  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0
    }
    if (newHunger > 10) {
      newHunger = 10
    }
    this.hunger = newHunger
  }


  feed() {
    if (!this.isSleeping){
      var hunger = this.hunger - 1

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
    return this.isFed = true
    }else{
      this.message = "The cat is sleeping. You cannot feed it!"
    }
    
  }

  nap() {
    this.isSleeping = true
  }

  wakeUp() {
    this.isSleeping = false
  }

  play() {
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
    this.isPlaying = true
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat
