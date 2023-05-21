//addition

function addition(num1, num2) {
  //num1 + num2
  return num1 + num2;
}

comsole.log(addition(3, 5));

//converting hours to seconds
function hoursIntoSeconds(hour) {
  // hours * 60 * 60
  return hour * 60 * 60;
}

console.log(hoursIntoSeconds(2));

//calculate the perimeter of a rectangle

function calcPermiter(length, width) {
  //2 * (length + width)
  return 2 * (length + width);
}
console.log(calcPermiter(10, 20));

//Calculate the perimeter of a triangle

function calcTriangleArea(base, height) {
  // 1/2 * base * height
  return (1 / 2) * base * height;
}

console.log(calcTriangleArea(3, 2));

//Adding Frontend to a string
function appendFrontend(string){

    return string + Frontend
}

console.log(appendFrontend('Apple'));

//Adding Frontend to a +number

function appendFrontend(number){
//add a plus infront of a number to make sure it's a number and not a string
    return (+number) + Frontend
}

console.log(appendFrontend('Apple'));

//Q.6 Greater than 100? True or False? Boolean

function sumGreaterThan100(num1,num2){
     return (num1+num2 >=100) 
}

console.log(sumGreaterThan100(52,51));

//Q.7 Less than or equal to 0

function lessThanOrEqualTOZero(num){
    return num <= 0;
}

console.log(lessThanOrEqualTOZero(0));

//Q8.Opposite boolean Ex.returns true
//An exclamation infront of a boolean value will give you the opposite value

function oppositeBolean(bool) {
return !bool;
}

console.log(oppositeBolean(false));

//Q9 Is not the number 0. 
//Strict Inequality (!==)operator checks whether its two operands are not equal
//Return booleans in one line of code

function isNotZero(num){
    return num !== 0;
}

console.log (isNotZero(0));

//Q.10 Calculate the Remainder
//The remainder operator (%) returns the remainder of dividing the first operand by the second
function calcRemainder(num1,num2){
    return num1 % num2;
}

console.log (calcRemainder(4,2));

//Q.11 Is the number odd? 
// If remainder does not equal zero after being divided by two. The number is odd
function isOdd(num){
return num % 2 !== 0;
}
console.log (isOdd(2));

//Q.12 If a number is even, return 1 otherwise return -1 
//(===) Strict Equality checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

function booleanInterger(num){
    return (num % 2 === 0) ? 1 : -1;
}
console.log (booleanInterger(2));

// If Lockhart Crime Family Associate, return "Made" otherwise return Gajiin
function lcfAssociate(made,gajiin){
    return (made === "Made") ? "Made" : "Gajiin";
}
console.log (lcfAssociate('made'));

//Ternary Operator (?) if the value of the left is truthy. It returns true otherwise it returns false
//Value has to be truthy meaning it has to exist. Falsey values do not exist. 

//Q13. Check if a user is logged in and Subscribed

function isLoggedInAndSubscribed(subscribed,loggedIn){
    return (subscribed=='Subscribed') && (loggedIn=='Logged_In')
}
console.log(isLoggedInAndSubscribed(loggedIn,subscribed))