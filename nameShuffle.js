// function nameShuffler(str){
//     const myArr = str.split(" ");
//     const arrLen = myArr.length;
//     console.log(myArr[arrLen-1] + " " + myArr[0]);
//     //console.log(myArr[1] + " " + myArr[0]);
// }

// const arr = "Douglas Bitok";
// nameShuffler(arr);

function nameShuffler(str){
    const myArr = str.split(" ");
    const rev = myArr.reverse();
    console.log(rev);
}



const arr = "Douglas Bitok";
nameShuffler(arr);
