// var i = 99;

// while (i >= 0) {

//     if (i === 1) {
//         console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
//         console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
//     }
//     else if (i === 0) {
//         console.log("No more bottles of beer on the wall, no more bottles of beer.");
//         console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

//     } else {
//         console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
//         console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
//     }

//     i--
// }

// ------------------------------------------------


function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibonacci = []; // สร้างอาเรย์เปล่าเพื่อเก็บค่าลำดับ Fibonacci
    
    if (n === 1) {
        fibonacci = [0]; // ถ้าต้องการแค่ 1 ตัว ให้คืนค่า [0]
    } else if (n >= 2) {
        fibonacci = [0, 1]; // เริ่มต้นด้วย 0 และ 1 สำหรับ n >= 2
        for (var i = 2; i < n; i++) { // เริ่มจากลำดับที่ 2
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); // เพิ่มค่าผลรวมของสองตัวก่อนหน้า
        }
    }
    
    //Return an array of fibonacci numbers starting from 0.
    return fibonacci;

    //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(3));
console.log(fibonacciGenerator(5)); 
console.log(fibonacciGenerator(10));
