// // setTimeout(()=>{
// //     console.log("first");
// // },4000);// run after 4 sec

// setInterval(()=>{
//     console.log("sec");
// },2000);

// let count = 0;
// let id=setInterval(()=>{
//     console.log("first");
//     count++;
//     if(count==5){
//         clearInterval(id);
//     }
// },2000);
  

// function roll(num,next){
//     setTimeout(()=> {
//         console.log("Roll. no. is " + num);
//         if(next) next();
        
//     },2000)
// }

// roll(12212,()=>{
//     console.log("wait its getting downloaded");
//     roll(12312,()=>{
//         console.log("wait its getting downloaded");
//         roll(12412,()=>{
//             console.log("wait its almost over");
//             roll(12512)
//         })
//     })
// })

// function roll(num, delay, next){
//     setTimeout(() => {
//         console.log(`You rolled a ${num}`);
//         if (next) next();
//     }, delay);
// }

// roll(5, 1000, () => {
//     console.log("Rolling again...");
    
//     roll(3, 2000, () => {
//         console.log("Rolling again...");
        
//         roll(6, 3000, () => {
//             console.log("Done rolling!");
//         });
//     });
// });

//ques :- 

const uiTeam = ["Harsh", "Aman", "Riya"];
const flutterTeam = ["Neha", "Kunal", "Arjun"];

function showMenu() {
    console.log("UI Team:");
    console.log(uiTeam);

    console.log("\nFlutter Team:");
    console.log(flutterTeam);


    const mergedTeam = [...uiTeam, ...flutterTeam];

    console.log("\nMerged Team:");
    console.log(mergedTeam);
}

function display(teamType, option) {
    switch(teamType) {
        case "ui":
            console.log("UI Team Members:");
            console.log(uiTeam);
            break;

        case "flutter":
            console.log("Flutter Team Members:");
            console.log(flutterTeam);
            break;

        case "all":
            const merged = [...uiTeam, ...flutterTeam];
            console.log("All Team Members:");
            console.log(merged);
            break;

        default:
            console.log("Invalid team type");
    }
}
showMenu();

display("ui");
display("flutter");
display("all");