function cashOut(money){
    if(money<0 || typeof money !== "number"){
        return "invalid"
    }
    else{
    const charge=money*1.75/100;
    return charge;}
}
const tk= cashOut();
console.log(tk)


function validEmail(email) {
    // শুরুতে . - _ + @ থাকলে false
    if (/^[.\-_+@]/.test(email)) {
        return false;
    }
    // @ থাকতে হবে
    if (!email.includes("@")) {
        return false;
    }
    // স্পেস থাকলে false
    if (email.includes(" ")) {
        return false;
    }
    // শেষ .com না হলে false
    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}

const mail = validEmail("rafatesat@gmail.com");
console.log(mail); // true


function electionResult(votes) {
    let mango = 0;
    let banana = 0;
    for (const vote of votes) {
        if (vote === "mango") {
            mango++;
        }
        else if (vote === "banana") {
            banana++;
        }

     }

    if (mango < banana) {
        return "banana";
    }
    else if (mango > banana) {
        return "mangoa";
    }
    else {
        return "draw";
    }


}
const countVote=electionResult(["banana","banana","mango"]);
console.log(countVote)



/*function signature/sample */
 function isBestFriend(f1, f2) {


    const cmp =
        f1.bestFriend === f2.roll && f2.bestFriend === f1.roll;
    return cmp;
}
const friendCheck = isBestFriend({ name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 })

console.log(friendCheck);




