console.log("Hej, välkomen!")

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question("vad heter du? ", (name) => {
  console.log(`Hej ${name}, välkomen!`);
  const star = "*".repeat(`Hej ${name}, välkomen!`.length + 4)
  console.log(`*${star}*`)
  console.log(`GOODBYE! ${name}`)
  readline.close()
})
