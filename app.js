console.log(`
    ★ ═══════════════ ★
      HEJ VÄLKOMMEN!
    ★ ═══════════════ ★
`)

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

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

askForName()
