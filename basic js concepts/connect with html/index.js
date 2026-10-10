// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count ++;
//         }
//     }
//     console.log(count);
// }

// const countVow = (str) => {
//         let count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ){
//             count ++;
//         }
//     }
//     console.log(count);
// }


// let arr = ['Dhaka','Chottogram','Rangpur','Rajshahi']

// arr.forEach((val,inx,arr)=>{
//     console.log(val.toUpperCase(),inx,arr)
// })

 

let modebtn = document.querySelector("#mode")
let currMode = "light";
let body = document.querySelector('body')


modebtn.addEventListener('click',() => {
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode)
})


