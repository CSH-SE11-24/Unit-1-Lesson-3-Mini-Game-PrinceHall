// Get started!

let name = prompt("You're Journey is just beginning. What is your name?")

let level = "1"

level = parseInt(level)

console.log(`Hello ${name} your current level is ${level}, .... Wait A new challenger approaches`)



const Enemyname = "Mind Flayer"

console.log(`${Enemyname} is Attacking you what do you do?`)

let playerchoice = prompt("Attack or Heal")

let diceroll = Math.floor(Math.random() * 20)

function combat(){

if(playerchoice ==  "Attack"){
  console.log(`You did ${diceroll} damage to ${Enemyname}`)

}

else if(playerchoice == "Heal"){
  console.log(`you Healed ${diceroll}`)
}

else{
  console.log("really?")
}

}
 combat()