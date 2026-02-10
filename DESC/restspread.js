// // function add(a,b,c){
// //     return a+b+c;
// // }
// // console.log(add( 1,3,3,4,6));   // take only first thrre element

// function add(numbers){
//     let total = 0;
//     for(let i=0;i<numbers.length;i++){
//         total = total+numbers[i];    //use i in place of numbers[i]
//     }
//     return total
// }
// console.log(add(1,2,23,4,45,5,6,6));  // return 0 bcz numbers call separatly one by one.. for use this use rest operator
// console.log(add([1,2,23,4,45,5,6,6]));   // [] also a method if not use restspread method(...) 

// // add=[1,2,3,4,55,5];
// // console.log(add);   



// let a=[1,2,3,4,5,6]
// // let[first,sec,last] = a;
// // console.log(first,sec,last);

// let[first,sec,...last] = a;

// console.log(first,sec,last);

// function test(...args){   // imp ques
//     console.log(args);
// }

// let arr1 = [10,20,30]
// test(...arr1);


// //q1  even or odd by arrow function

// const eo = (a) => {
//     if(a%2==0){
//         return "even";
//     } 
        
//     return "odd";
// }
// console.log(eo(2));
// console.log(eo(3));

// //q2 reverse string

// const rev = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(rev("string"));

// //q3 check avg is greater than 40 or not (pass or fail)

const marks = (pass) => {
    let total=0;
    for(let i=0;i<pass.length;i++){
        total+=pass[i];
    }
    let avg=total/pass.length;
    if(avg>=40){
        return "pass"
    }
    return "fail"
}
t=[1,2,3,4,4,45];
console.log(marks([20,4,65,77,8]));
console.log(marks(t));
