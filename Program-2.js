
// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5, 7
//     5) input a = x, then output : 1, 3, 5, 7, .......

// Solution:-

function GenerateSeries(n){
    let count = 1;
    console.log(count);
    for(let i=1; i<n; i++){
        count = count + 2;
        console.log(count);
    }
}

console.log(GenerateSeries(4)); // Output: 1,3,5,7

