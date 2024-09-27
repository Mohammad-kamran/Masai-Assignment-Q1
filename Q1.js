const numbers = [5, 3, 8, 1, 2];
console.log(numbers); // Output: [5, 3, 8, 1, 2]

function addNumber(numbers, x) {
    numbers.push(x);
    console.log(numbers);
}

function removeNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            array.splice(i, 1); // Remove the element
            i--; // Adjust the index to avoid skipping the next element
        }
    }
}

function sortNumbers (array) {
    let n = array.length;
    let swapped; //if no elements are swapped during a pass, it means the array is already sorted, and there's no need to continue looping.

    for (let i=0; i < n-1; i++) {
        swapped = false ; 

        //inner loop for comparision and swapping 
        for(let j=0; j <n-1-i; j++) {
            if(array[j] > array[j +1] ) {
                //Swap the element 
                let temp = array[j];
                array[j] = array[j+1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        // If no swapping is done, the array is already sorted
        if (!swapped) break;
    }
}

function calculateSum(array) {
    let sum = 0;
    for (let i =0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

function calculateAvrage (array) {
    let avrage = calculateSum(array) / array.length; // (:  
    return avrage;
}
// addNumber(numbers, 4);
// removeNumber(numbers, 8);
// sortNumbers(numbers);
let sum = calculateSum(numbers);
console.log("Sum : " + sum);
let avrage = calculateAvrage(numbers);
console.log("Avrage : "+ avrage); // (:



// console.log(numbers); // Output: [5, 3, 1, 2]
