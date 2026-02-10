const student = {
    name: "Abhishek",
    age: 33,
    address: {
        city: "Gzb",
        state: "UP"
    }
}
const { name,age} = student;

// const{name: student = "Amit",age,address: {    // it take only in default value, we can't change the value if already exist
//     city}} = student;                      

// console.log(student,age);


// let numbers = [10,20,30];
// let [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);


// let date = [1,2]
// // let [a=10,b=20] = Data;
// console.log(a);
// console.log(b);

let p = 5;
let q = 10;
[p,q] = [q,p];
console.log(p);
console.log(q);

