const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name?\n", (answer1) => {
  // TODO: Log the answer in a database
  console.log(`\nThank you for your valuable feedback: ${answer1}`);

  rl.question("\nWhat's an activity you like doing?\n", (answer2) => {
    // TODO: Log the answer in a database
    console.log(`\nThank you for your valuable feedback: ${answer1}`);

    rl.question("\nWhat do you listen to while doing that?\n", (answer3) => {
      // TODO: Log the answer in a database
      console.log(`\nThank you for your valuable feedback: ${answer1}`);

      rl.question("\nWhich meal is your favourite (eg: dinner, brunch, etc.)\n", (answer4) => {
        // TODO: Log the answer in a database
        console.log(`\nThank you for your valuable feedback: ${answer1}`);

        rl.question("\nWhat's your favourite thing to eat for that meal?\n", (answer5) => {
          // TODO: Log the answer in a database
          console.log(`\nThank you for your valuable feedback: ${answer1}`);

          rl.question("\nWhich sport is your absolute favourite?\n", (answer6) => {
            // TODO: Log the answer in a database
            console.log(`\nThank you for your valuable feedback: ${answer1}`);

            rl.question("\nWhat is your superpower? In a few words, tell us what you are amazing at!\n", (answer7) => {
              // TODO: Log the answer in a database
              console.log(`\nThank you for your valuable feedback: ${answer1}`);
  
              let results = `My name is ${answer1}. An activity I like doing is ${answer2}. I will usually listen to ${answer3}. \r\nMy faovurite meal would be ${answer4}. My favourite thing to eat for that meal ${answer5}. \r\nI love playing ${answer6}. \r\nAnd my superpower would be ${answer7}. `

console.log(results);
 
rl.close();
})
          })
        })
      })
    })
  })
})