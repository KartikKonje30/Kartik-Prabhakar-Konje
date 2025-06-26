
// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

// Solution:- 

// Using Class Approach:-

class Calculator {
    constructor(a, b, operation){
        this.a = parseFloat(a),
        this.b = parseFloat(b),
        this.operation = operation.toLowerCase();
    }
    calculate(){
        switch(this.operation){
        
        case "addition": return this.a + this.b;
        
        case "subtraction": return this.a - this.b;
        
        case "multiplication": return this.a * this.b;
        
        case "division": if(this.b === 0){
                            return "Error: Dividing by zero tends to Infinity!"
                        }else{
                            return parseFloat((this.a / this.b).toFixed(2));
                        }
    
        default:  return "Invalid Operation!"
        }
    }
}

// Class Approach Testing

let calculate1 = new Calculator(10, 2, "Addition"); 
console.log(calculate1.calculate());

let calculate2 = new Calculator(10, 2, "Subtraction"); 
console.log(calculate2.calculate());

let calculate3 = new Calculator(10, 2, "multiplication"); 
console.log(calculate3.calculate());

let calculate4 = new Calculator(10, 3, "division"); 
console.log(calculate4.calculate());

// Checking invalid operation
let calculate5 = new Calculator(10, 2, "Modulus"); 
console.log(calculate5.calculate());

// Checking Error of dividing by 0
let calculate6 = new Calculator(10, 0, "Division"); 
console.log(calculate6.calculate());



// Using Functional Approach:-

function Calculator2(a, b, operation){

    switch (operation.toLowerCase()) {

        case "addition": return a + b;
        
        case "subtraction": return a - b;
        
        case "multiplication": return a * b;
        
        case "division": if(b === 0){
                            return "Error: Dividing by zero tends to Infinity!"
                        }else{
                            return parseFloat((a / b).toFixed(2));
                        }
    
        default:  return "Invalid Operation!"
    }

}

// Functional Approach Testing

// console.log(Calculator2(10, 2, "Addition"));
// console.log(Calculator2(10, 2, "subtraction"));
// console.log(Calculator2(10, 2, "multiplication"));
// console.log(Calculator2(10, 3, "division")); 
// console.log(Calculator2(10, 0, "division")); // Checking Error of dividing by 0
// console.log(Calculator2(10, 3, "Modulus")); // Checking invalid operation



