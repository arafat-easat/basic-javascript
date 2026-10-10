const sentence = 'I am learning web dev'


 let reverse = ""
 for(const letter of sentence){
     reverse = letter + reverse ;
 }
console.log(reverse);




// number.reverse();
// console.log(number)


const rev_number = [];
for (const num of number){
    
    rev_number.unshift(num);
}
console.log(rev_number)
