// 59.  Berilgan massivdan n-chi eng kichik elementni toping.


function nthSmallest(arr, n) {
    let newArr = arr.sort((a, b) => a - b);
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
        if (i === n - 1) {
            console.log(newArr[i])
        }
    }
}

// Test case
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10




// 60. Berilgan sonli massivda eng ko'p takrorlangan elementni toping.


function mostFrequent(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < arr.length; g++) {
            console.log(arr[g])
        }
        // console.log(arr[i])

    }
}

// Test case
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3



// 61. Berilgan harflar qatorida eng ko'p takrorlangan harfni toping.

function mostFrequentChar(str) {
    let obj = {}; 
    let count = 0; 
    let letters = ''; 

    for (let char of str) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }

        if (obj[char] > count) {
            count = obj[char];
            letters = char;
        }
    }

    return letters;
}

// Test cases
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"




// 62. Berilgan sonli massivdagi eng kichik musbat sonni toping.



function firstMissingPositive(nums = []) {
    let newarr = nums.filter(item => item > 0).sort((a, b) => a - b);
    console.log(newarr[0])
}


// firstMissingPositive([3, 4, -1, 1]); // Output: 1
// firstMissingPositive([1, 2, 0]); // Output: 1


// 63. Berilgan stringdagi barcha harflarni bir qatorga chop eting.


function printCharsInLine(s) {
    console.log(...s)
}
// printCharsInLine("hello"); // Output: "h e l l o"



// 64. Berilgan stringlar massivida eng uzun o'xshash prefiksni toping.
function longestCommonPrefix(strs) {
    let str = ""
    for (let i = 0; i < strs[0].length; i++) {
        let l = strs[0][i]

        for (let g = 1; g < strs.length; g++) {
            if (i >= strs[g].length || strs[g][i] !== l) {
                return str
            }
            
        }
        str += l
    }
    return str
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""




// 65. Berilgan qator ichidagi arrayda ichidagi sonlar yi’g’indisi yuqori bo’lgan array ni qaytaring

function maxSumSubmatrix(matrix, k) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        let matrixSum = matrix[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
        if (matrixSum > sum) {
            sum = matrixSum
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0,) === sum) {
            console.log(matrix[i])
        }
    }
}

// maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ]); // [7, 8, 9]





// 66. Berilgan ikki massivdagi umumiy elementlarni toping.


function intersection(nums1, nums2) {
    let result = []; 

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
            result.push(nums1[i]);
        }
    }

    return result;
}

// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]



// 67. Berilgan sonlar qatorida berilgan yig'indini topuvchi barcha ikkilik juftliklarni toping.

function twoSumPairs(nums, target) {
    let sum = []; 
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                sum.push([nums[i], nums[j]]);
            }
        }
    }
    
    return sum;
}
  
// console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
// console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]


// 68. Berilgan stringda har bir belgini qanchalik ko'p uchraganini hisoblang.

function charFrequency(s) {
    let obj = {}; 

    for (let char of s) {
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }

    return obj;
}

// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

