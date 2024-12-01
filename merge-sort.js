const array = process.argv;

console.log(array);

//function to create an array out of the arguments in command line i.e.
//node merge-sort.js [3, 2, 1, 13, 8, 5, 0, 1]

let arrayToSort = []; //array to be created from the argument in the command line

function combineArray(array) {
  //first loop splits each array element string (starting with 3rd) into separate arrays
  for (let i = 2; i < array.length; i++) {
    let arrayElement = array[i].split('');
    console.log(arrayElement);

    let tempString = '';

    //second loop checks if element is number, combines into larger number (tempstring),
    //converts the string into a number and pushes into the new array
    for (let j = 0; j < arrayElement.length; j++) {
      if (isNaN(Number(arrayElement[j])) !== true) {
        tempString += arrayElement[j];
      }
    }
    arrayToSort.push(Number(tempString));
    tempString = '';
  }
  console.log(arrayToSort);
}
combineArray(array);

//my original not working function fixed based on the working one below
function mergeSort2(array) {
  let sortedArray = [];

  if (array.length === 1) {
    return array; //return array not just return
  } else {
    let halvingPoint = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, halvingPoint);
    let rightHalf = array.slice(halvingPoint, array.length);

    //this does what I could not figure out - merges the sorted halves and returns
    //the result for the higher 'level'
    return merge2(mergeSort2(leftHalf), mergeSort2(rightHalf));
  }
}

function merge2(leftHalf, rightHalf) {
  let tempArray = [];
  //loopTimes undefined error due to not returning the tempArray
  let loopTimes = leftHalf.length + rightHalf.length;

  //this part was buggy due to having < > instead of <= >=, casused issues with equal numbers
  for (let i = 0; i < loopTimes; i++) {
    if (leftHalf[0] <= rightHalf[0] || rightHalf[0] === undefined) {
      tempArray.push(leftHalf[0]);
      leftHalf.shift();
    } else if (leftHalf[0] >= rightHalf[0] || leftHalf[0] === undefined) {
      tempArray.push(rightHalf[0]);
      rightHalf.shift();
    }
  }
  return tempArray;
}

console.log('mergeSort2 - fixed original');
console.log(mergeSort2(arrayToSort));

//my working function strongly based on the one below from Jaimal Dullat
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const halvingPoint = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, halvingPoint);
    const rightHalf = array.slice(halvingPoint);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
}

function merge(leftHalf, rightHalf) {
  let tempArray = [];
  leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      tempArray.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      tempArray.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }
  return tempArray
    .concat(leftHalf.slice(leftIndex))
    .concat(rightHalf.slice(rightIndex));
}

console.log('mergeSort - cheated');
console.log(mergeSort(arrayToSort));

//This one works (by Jaimal Dullat):
/* function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the `left` array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the `right` array
    }
  }

  // Concatenate the remaining elements from either `left` or `right` (if any)
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Base case: If the array has only one element, return it (already sorted)
  if (array.length === 1) {
    return array;
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2); // Find the middle index
  const left = array.slice(0, middle); // Split the array into left half
  const right = array.slice(middle); // Split the array into right half

  // Recursively call mergeSort on the left and right halves
  return merge(
    mergeSort(left), // Recursively sort the left half
    mergeSort(right) // Recursively sort the right half
  );
}
console.log(mergeSort(arrayToSort));
 */
