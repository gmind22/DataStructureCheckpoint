// Problem 1 Solution
function distinct(arr1, arr2) {
    let sum = 0;

    for(let char of arr1) {
        if(!arr2.includes(char)) {
            sum += char;
        }
    }
    for(let char of arr2) {
        if(!arr1.includes(char)) {
            sum += char;
        }
    }

    return sum;
}

console.log(distinct([3,1,7,9], [2,4,1,9,3])) 
// This will out put distinct characters which sum is equal to 13


// Problem 2 Solution
const vector1 = parseInt(prompt("Enter First Vector dim 1"));
const vector2 = parseInt(prompt("Enter First Vector dim 2"));
const vector3 = parseInt(prompt("Enter Second Vector dim 1"));
const vector4 = parseInt(prompt("Enter Second Vector dim 2"));

const vec1Arr = [];
const vec2Arr = [];

vec1Arr.push(vector1);
vec2Arr.push(vector2);
vec1Arr.push(vector3);
vec2Arr.push(vector4);

    if(vec1Arr.length !== vec2Arr.length) {
        console.log("Vectors are not of the same dimension");
    }

    let ps = 0;

    for(let i = 0; i < vec1Arr.length; i++) {
        for(let j = 0; j < vec2Arr.length; j++) {
            if(i == j) {
                ps += vec1Arr[i] * vec2Arr[j];
                continue;
            } 
        }
    }

    if(ps == 0) {
        console.log("Both Vectors are Orthogonal");
    }

    console.log(ps);
