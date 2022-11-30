let fruits = ['mango', 'apple', 'banana', 'orange', 'kiwi', 'jackfruit', 'cherry', 'banana', 'dragonfruit', 'apple', 'jackfruit', 'kiwi'];
console.log(fruits)
duplicatefruits = []

function findduplicates(){
for (i=0; i<fruits.length; i++){
    fruitslist = fruits.slice().sort()
    if(fruitslist[i+1]===fruitslist[i]){
        duplicatefruits.push(fruitslist[i])
    }
}
console.log(duplicatefruits)
console.log("yes! got the duplicate fruits, apple, banana, jackfruit and kiwi.. but the thing is, this method only prints (duplicate) fruits. not triplicate ones. the triplicate ones come twice in the console.")
}

findduplicates()
