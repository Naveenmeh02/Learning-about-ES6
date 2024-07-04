# Understanding-ES6 by *`S S Naveen`*
This repository contains a small cheat sheet of essential concepts of JavaScript's ES6 features.
- This is for the small session I conducted on 5/07/2024 
# 
<img src="./ES6-Resources/ES6-presenation-coverPage.png">

# Table  of contents 
- [Why do we need ES6](#Whys-ES6-needed)
- [Key features](#Key-features) 
- [Where do we use these in React](#React-use-cases)


## Whys-ES6-needed
- ES6 helps in making the code more cleaner and readable.

before
```javascript
funtion add(){
    let a = 1;
    a+=1;
}
add()
```
after

```javascript
let add = (a) => a+=1
add()
```
#
## Key-features
It's most commonly used Key features are:
#
## `let` and `const` variables
    **Defining these variables**
### `let`: 
> let variables exist in a block scope
```javascript
let a = 1;
```
> let variables cannot be redefined, but can be reassigned:
```javascript
let variableName = "other value"  
    //-->SyntaxError
variableName = "other value"
```

### `const`: 
> Constant variables exist in a block scope
```javascript 
const pie = 3.14;
```
> You can change, add value to a constant array  but you cannot reassign or redefine it:
```javascript
const arrayName = [1,2,3,4]
arrayName.push(5) 
    //-->[1,2,3,4,5]
const arrayName = [9,8,7,6] 
    //-->SyntaxError
```


#
## Arrow funtion
> Arrow function is a new way of defining a function for cleaner code and is commonly used in callback function

```javascript
//regular function 
function addNum(a,b){
    let a = 1;
    let b = 2;
    sum = a + b;//sum = 3
    console.log(sum);
}
//arrow funtion
let functionName = (a,b) => a+b;
```
Arrow function is commonly used in callback:
```javascript
//regular function 
function addNum(a,b){
    let a = 1;
    let b = 2;
    sum = a + b;//sum = 3
    console.log(sum);
}
//arrow funtion
let functionName = (a,b) => a+b;
```
#
## Objects
> Objects in Js collection of key-value where the key are the strings and values can be datatypes 
```javascript
//this is a common way to create an object
const person = {
    name: "naveen",
    gender:"male";
}
console.log(person.name + "is a sigma" + person.gender);
// OUTPUT: naveen is a sigma male
```
There are two ways to access an object 
- Dot notation 
- Bracket notation 

``` javascript
const person = {
    name: "naveen",
    walk: funtion() {}, //this is called a method
    talk(){} //this is a cleaner and simpler way to create a method
};
    person.talk(); //calling using dot notation
    person['name'] = "zayn" // calling using bracket notation 
                            //values can be modified
```
#
## `this` keyword
> It's a keyword in Js that returns the reference to a current object 
```javascript
const person = {
    name: "naveen",
    talk(){
        console .log(this)
    }
};
```
#
## Template Literals 
> This is a quick way to handle a string.They provide a simpler way and more power way to create and manipulate strings 

### ES5 Method

```javascript
let name = "CSBS"
let class = "this is " + name + " classroom" // This is CSBS classroom
```
1. ### Key Feature 
 - Template are enclosed within Backticks ( ` ) instead of quotes ( " ) 
``` javascript 
const = `Hello World`
```
2. ### String Interpolation 

- You can embed variables and expressions directly within the string using  `${}`.
``` javascript 
const name = "CSBS"; 
let class = `This is ${name} classroom` // This is CSBS classroom
```
3. ### Expression Evaluation 
``` javascript 
let a = 4
let b = 3
let sum = `The sum is ${a+b}` //The sum is 7
```
#
## Ternary Operators
> The ternary operator is a shorthand way to write an `if-else` statement in JavaScript. 
### Regular way to write a conditional statement 
```javascript
let age = 20;
let message;

if (age >= 18) {
  message = 'You are an adult.';
} else {
  message = 'You are a minor.';
}

console.log(message); // 'You are an adult.'
```

## React-use-cases
