// WAP to print the marks of a student in an  object using for loop. 
//     obj ={ hamit : 100, raju: 30, aakash : 10 }
/*              HACKED!!! 
let marks = {
     hamit : 100,
     rohan : 30,
     aakash : 10
}

for (let i = 0; i < 3; i++) {
    const keys = marks[i]
    const value = marks[keys]

    console.log(value)
}  */

// WAP above using for in loop. 
let marks = {
    hamit : 100,
    rohan : 30,
    aakash : 10
}

for (let key in marks){
    let names = marks[key]
    console.log(key, names)
}


// WAP to print "try again" until the user enters the correct number. 

let num = 3;
if(num !== 2) {
    console.log("Try Again!!")
}


// write a function to find mean of 5 numbers. 


let mean = 0;
for(i=1; i<6;i++){
    mean = (mean + i)
}

console.log(mean/5)