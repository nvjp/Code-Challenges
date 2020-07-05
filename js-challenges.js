// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level. Go to the editor
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]



// 22. Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(a1, a2) {
    for (var item of a2) {
        a1.push(item);
    }
    return Array.from(new Set(a1.sort((a, b) => a - b)));
}

// 23. Write a JavaScript function to find the difference of two arrays. Go to the editor
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
function difference(a1, a2) {
    var arry1 = a1.concat(a2);
    var arry2 = [];
    recurFn(arry2, arry1)
    console.log(arry2)
    var arry2 = arry2.filter((item) => a1.toString().indexOf(item) === -1 || a2.toString().indexOf(item) === -1);
    return arry2.sort((a, b) => a - b);
}

function recurFn(arry2, arry1) {
    for (var i = 0; i < arry1.length; i++) {
        if (Array.isArray(arry1[i])) {
            recurFn(arry2, arry1[i])
        } else {
            arry2.push(arry1[i])
        }
    }
    return arry2;
}
// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function removeNulls(arry) {
    return arry.filter(item => item);
}

// 25. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

function compare_to_sort(x, y) {
    return x.title - y.title
}
// 20. Write a JavaScript program to find 
// duplicate values in a JavaScript array. 
function duplArry(arry) {
    var narry = arry.filter((e, i, a) => {
        return a.indexOf(e) != i;
    })
    return narry;
}
// 19. There are two arrays with 
// individual values, write a JavaScript 
// program to compute the sum of each individual 
// index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
function compute_sum(a1, a2) {
    var result = []
    if (a1.length > a2.length) {
        for (var i in a1) {
            if (a2[i]) {
                result.push(a1[i] + a2[i]);
            } else {
                result.push(a1[i]);
            }
        }
    } else {
        for (var i in a2) {
            if (a1[i]) {
                result.push(a1[i] + a2[i]);
            } else {
                result.push(a2[i]);
            }
        }
    }
    console.log(result);
}
// 16. Find the leap years in a given range of years. 

function leap_year(min, max) {
    for (var i = min; i <= max; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }
}
// 14. Write a JavaScript program to 
// remove duplicate items from an array (ignore case sensitivity).
function removeDuplicates(arry) {
    return Array.from(new Set(arry));
}
// 12. Write a JavaScript program to 
// compute the sum and product of an array of integers.
function sum_product(arry) {
    var sum = 0;
    var product = 1;
    for (var item of arry) {
        sum += item;
        product *= item;
    }
    console.log('Sum: ' + sum, 'Product: ' + product);
}
// 11. Write a JavaScript program to find the sum 
// of squares of a numeric vector.
function sum_sq(arry) {
    var result = 0;
    for (var item of arry) {
        result += Math.pow(item, 2);
    }
    return result;
}
// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------
function printArrys(arry) {
    for (var i in arry) {
        // document.writeln('row'+ i+'<br>')
        for (var j in arry[i]) {
            // console.log(arry[i][j]);
            document.writeln(arry[i][j])
        }
        document.writeln('<br>')
    }
}

// 9. Write a JavaScript program which accept 
// a string as input and swap the case 
// of each character. For example if you
//  input 'The Quick Brown Fox' the output 
//  should be 'tHE qUICK bROWN fOX'. 
//  Go to the editor

// function swapCase(str) {
//     var newStr = '';
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             newStr += str[i].toUpperCase();
//         } else {
//             newStr += str[i].toLowerCase();
//         }
//     }
//     return newStr;
// }

// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function frequentItem(arry) {
    var counter = 0;
    var currentItemCounter = 0;
    var currentItem = '';
    var arry1 = Array.from(new Set(arry));
    for (var i = 0; i < arry1.length; i++) {
        for (var j = 0; j < arry.length; j++) {
            if (arry1[i] === arry[j]) {
                currentItemCounter++;

            }
        }
        if (currentItemCounter > counter) {
            counter = currentItemCounter;
            currentItem = arry1[i];
            currentItemCounter = 0;
        }
    }
    console.log('Item: ' + currentItem, 'frequency: ' + counter);
}
// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
function sortArry(input) {
    return input.sort((a, b) => a - b);
}
// 6. Write a JavaScript program which accept a number
//  as input and insert dashes (-) between each two even numbers. 
//  For example if you accept 025468 the output should be 0-254-6-8.
function insertDashes() {
    var num = window.prompt();
    var result = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
            result = result + '-' + num[i];
        } else {
            result = result + num[i];
        }
    }
    return result;
}
// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arry, n) {
    if (!n) {
        return arry[arry.length - 1];
    } else {
        return arry.slice(Math.max(arry.length - n, 0));
    }
}
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// function first(arry, n) {
//     if (!n) {
//         return arry[0]
//     } else if (n < 0) {
//         return [];
//     } else {
//         return arry.slice(0, n);
//     }

// }
//  Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(arry) {
    var narry = JSON.parse(JSON.stringify(arry));
    return narry;
}


{/* Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));  */}

function is_array(input) {
    return Array.isArray(input) ? 'array' : 'not array';
}
