// Removing duplicate items from an Array
//-------------- METHOD 1 --------------//

let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];
let uniqueArray = [...new Set(array)];

console.log(uniqueArray);


//-------------- METHOD 2 --------------//


let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];

let uniqueArray = array.filter((c, index) => {
    return array.indexOf(c) === index;
});

console.log(uniqueArray);



//-------------- METHOD 3 --------------//

let array = ['a', 'g', 'a', 5, 's', 's', 5, 3];

let uniqueArray = [];
array.forEach((c) => {
    if (!uniqueArray.includes(c)) {
        uniqueArray.push(c);
    }
});

console.log(uniqueArray);
