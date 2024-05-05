// Encapsulation refers to bundling the data (properties) and methods that operate on the data into a single unit or class. 
// In JavaScript, we can achieve encapsulation using closures to create private variables and methods.


function Counter() {
    let count = 0;
  
    // Private method
    function increment() {
      count++;
    }
  
    // Public method
    this.getCount = function() {
      return count;
    };
  
    this.incrementCount = function() {
      increment();
    };
  }
  
  const counter = new Counter();
  console.log(counter.getCount()); // Outputs: 0
  counter.incrementCount();
  console.log(counter.getCount()); // Outputs: 1
  