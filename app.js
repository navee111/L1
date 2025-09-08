import readline from "readline"
/**
 * The main entry point of the application.
 * This script prompts the user for their name and greets them.
 * @author Nawid. 
 * @version 1.0.0
 */

console.log(`
    ★ ═══════════════ ★
      HEJ VÄLKOMMEN!
    ★ ═══════════════ ★
`)

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
/**
 * Prompts the user for their name and handles the greeting
 * @returns {void}
 */
function askForName() {
  readline.question("vad heter du? ", (name) => {
    // tar bort mellanslag.
    name = name.trim()

    if (name === "" || name.length === 0) {
      console.log("Du måste ange ett namn!")
      
      askForName() // fråga igen.
    } else {
      console.log(`Hej ${name}, välkomen!`)
      const star = "*".repeat(`Hej ${name}, välkomen!`.length + 4)
      console.log(`*${star}*`)
      console.log(`Have a great day! ${name} 🫡`)
      readline.close()
    }
  })
}
// Start the program:
askForName()
