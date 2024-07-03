# Understanding-ES6
This repository contains a small cheat sheet of essential concepts of JavaScript's ES6 features.
- This is for the small session I conducted on 5/07/2024 
# 
<img src="./ES6-Resources/ES6-presenation-coverPage.png" width="1000px">

# Table  of contents 
- [Why do we need ES6](#Whys-ES6-needed)
- [Key features](#Key-features)
- [Where do we use these in React](#React-use-cases)


## Whys-ES6-needed
- ES6 helps in making the code more concise and readable.

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
**[let & conts](#let-const-varialbles)**
    **Defining these variables**
### `let`: 
> let variables exist in a block scope
```javascript
    let a = 1;
```
>>let variables cannot be redefined, but can be reassigned:
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
**[Arrow funtions](#arrow-functions)**

# 
## React-use-cases
