document.write('<h2>Q1. Print odd numbers from 1 to 100 using do while loop<br><h2>')

let i = 1;
do {
    if(i%2!=0){
        console.log(`${i} is an odd number`)
    }
    i++
} while (i<=100)