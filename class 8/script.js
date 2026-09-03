// Conditional statements

// let age = 100;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else if (age < 13) {
//     console.log("You are a child.");
// } else {
//     console.log("You are a teenager.");
// }
// if (age >= 1 && age < 18) {
//     console.log("You are a minor.");
// }
// else if (age >= 18 && age <= 65) {
//     console.log("You are an adult.");
// } else if (age > 60 && age <= 100) {
//     console.log("You are a senior citizen.");
// } else {
//     console.log("You are a child.");
// }



//switch statement
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



//loops
//? for statement
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while statement
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do...while statement
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// for...in statement
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of statement
// const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//     console.log(number);
// }