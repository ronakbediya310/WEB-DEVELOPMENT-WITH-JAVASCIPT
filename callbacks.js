// Callback functions are a fundamental concept in JavaScript. They're functions that are passed as arguments to other functions and are executed after the completion of an asynchronous operation or at a certain point in the execution of the containing function.

// function asyncOperation(callback) {
//     setTimeout(function() {
//       callback('Async operation completed');
//     }, 2000);
//   }
  
//   // Define a callback function
//   function handleCompletion(message) {
//     console.log(message);
//   }
  
//   // Call asyncOperation with a callback
//   asyncOperation(handleCompletion);

//   function higherOrderFunction(callback) {
//     // Do something
//     callback();
//   }
  
//   higherOrderFunction(function() {
//     console.log('Callback executed');
//   });

//   async function myFunction() {
//     try {
//       const result = await asyncOperation();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   myFunction();


const fs = require('fs');

// Function to read a file
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}

// Function to write to a file
function writeFile(filePath, data, callback) {
  fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
}

// Main function to read, modify, and write file
function processFile(inputFilePath, outputFilePath, callback) {
  // Read the file
  readFile(inputFilePath, (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    // Convert data to uppercase
    const modifiedData = data.toUpperCase();

    // Write modified data to another file
    writeFile(outputFilePath, modifiedData, (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, 'File processed successfully');
    });
  });
}

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

processFile(inputFilePath, outputFilePath, (err, message) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(message);
});
