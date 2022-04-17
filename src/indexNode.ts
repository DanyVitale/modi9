// console.log('Starting');

// setTimeout(() => {
//   console.log('Two seconds have passed');
// }, 2000);

// setTimeout(() => {
//   console.log('Zero seconds have passed');
// }, 0);

// console.log('Stopping');

// ------------------------------------------------------

// import {writeFile} from 'fs';

// writeFile('helloWorld.txt', 'Hello World!', (err) => {
//   if (err) {
//     console.log('Error writing file');
//   } else {
//     console.log('File written and created successfully');
//   }
// });

// ------------------------------------------------------

// import {readFile} from 'fs';

// readFile('helloWorld.txt', (err, data) => {
//   if (err) {
//     console.log('Error reading file');
//   } else {
//     console.log(data.toString());
//   }
// });

// ------------------------------------------------------

// import {watchFile} from 'fs';

// watchFile('helloWorld.txt', (curr, prev) => {
//   console.log(`File changed from ${prev.size} bytes to ${curr.size} bytes`);
// });

// ------------------------------------------------------

// import {spawn} from 'child_process';

// watchFile('helloWorld.txt', (curr, prev) => {
//   console.log(`File changed from ${prev.size} bytes to ${curr.size} bytes`);

//   const cat = spawn('cat', ['-n', 'helloWorld.txt']); // spawn a child process
//   cat.stdout.pipe(process.stdout); // pipe the output of the child process to the parent process
// });

// ------------------------------------------------------

// watchFile('helloWorld.txt', (curr, prev) => {
//   console.log(`File changed from ${prev.size} bytes to ${curr.size} bytes`);

//   const wc = spawn('wc', ['helloWorld.txt']); // spawn a child process

//   let wcOutput = '';
//   wc.stdout.on('data', (piece) => wcOutput += piece); // pipe the output of the child process to the parent process

//   wc.on('close', () => {
//     const wcOutputAsArray = wcOutput.split(/\s+/);
//     console.log(`File has ${wcOutputAsArray[1]} lines and ${wcOutputAsArray[2]} words`);
//     console.log(`File has ${wcOutputAsArray[3]} characters`);
//   });
// });

// ------------------------------------------------------

// import {createReadStream} from 'fs';

// const inputStream = createReadStream('helloWorld.txt');

// inputStream.on('data', (piece) => {
//   process.stdout.write(piece);
// });

// inputStream.on('error', (err) => {
//   process.stderr.write(err.message);
// });

const add = (a: number, b: number): number => {
  return a + b;
};

const sum = add(5, 10);

console.log(sum);

const printDetails = (details: string[]): void => {
  details.forEach((element) => {
    console.log(element);
  });
};

const details = ['Hello', 'World'];

printDetails(details);
