'use strict';

const numbers = [2,4,6,1,7,19,12,65,43,77,65,100,3];

console.log(selectionSort(numbers));
console.log(mergeSort(numbers));
console.log(quickSort(numbers));

function selectionSort(array, compare){
  compare = compare ? compare : (a, b) => a < b;

  for(let i = 0; i < array.length; ++i){
    var swapIndex = i;

    for(var j = i + 1; j < array.length; ++j){ 
      if(compare(array[j],  array[swapIndex]))
        swapIndex = j;
    }

    if (swapIndex != i){
      let tmp = array[i];
      array[i] = array[swapIndex];
      array[swapIndex] = tmp;
    }
  }
  return array;
}

function mergeSort(items, compare) {
  
  compare = compare ? compare : (a, b) => a < b;

  if (items.length < 2) return items;

  let middle = Math.floor(items.length / 2);
  let left = items.slice(0, middle);
  let right = items.slice(middle);

  function _merge(left, right, compare){
    var result  = [];

    while (left.length || right.length){
      if (!left.length) {
        result.push(right.shift());
        continue;
      }

      if (!right.length) {
        result.push(left.shift());
        continue;
      }

      if (compare(left[0], right[0])){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left).concat(right);
  }

  return _merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

function quickSort(items, compare, left, right) {
  
  left = left || 0;
  right = right || items.length - 1;
  compare = compare ? compare : (a,b) => a < b;

  if (items.length > 1){
    let pivot = _partition(items, compare, left, right);

    if (left < (pivot - 1)){
      quickSort(items, compare, left, pivot);
    }

    if ((pivot + 1) < right){
      quickSort(items, compare, pivot + 1, right);
    }

  }

  return items;


  function _partition(items, compare, left, right, pivot) {
    pivot = pivot || Math.floor((left + right) / 2);

    if (left <= right){
      left = _advanceLeft(items, compare, left, pivot);
      right = _advanceRight(items, compare, right, pivot);
      if (left <= right){
        if (left < right)
          _swap(items, left, right);
        return _partition(items, compare, left + 1, right - 1, pivot);
      }
    }

    return pivot;
  }
  
  function _swap(items, left, right){
    let tmp = items[left];
    items[left] = items[right];
    items[right] = tmp;
  }

  function _advanceLeft(items, compare, left, pivot){
    if (compare(items[left], items[pivot]))
      return _advanceLeft(items, compare, left + 1, pivot);
    return left;
  }

  function _advanceRight (items, compare, right, pivot){
    if (compare(items[pivot], items[right]))
      return _advanceRight(items, compare, right - 1, pivot);
    return right;
  }
  
}
