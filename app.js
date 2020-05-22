var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(`How old are you? `);
rl.prompt();

rl.on('SIGCONT', () => {
    rl.prompt();
  });

rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    rl.close();
});
rl.on('pause', () => {
    rl.on('resume', () => {
        console.log('Resume Event is invoked.');
    });
    console.log('Paused Event is invoked');

});


// rl.on('SIGINT', () => {
//     rl.question('Exit (y or n)? ', (input) => {
//       if (input.match(/^y(es)?$/i)) rl.pause();
//     });
// });

rl.on('SIGTSTP', () => {
    // This will override SIGTSTP and prevent the program from going to the
    // background.
    console.log('Caught SIGTSTP.');
  })