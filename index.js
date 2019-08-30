
function findMinAndRemoveSorted(arr){
  let min = arr[0];
  let minIndex;

  for (let i = 0; i < arr.length; i++){
    if(min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }

  arr.splice(minIndex, 1);

  return min;
}

function merge(arr1, arr2){
  let sorted = [];
  
  while(arr1.length !== 0 && arr2.length != 0){
    if(arr1[0] < arr2[0]){
      sorted.push(arr1.shift());
    } else{
      sorted.push(arr2.shift());
    }
  }

  return sorted.concat(arr1).concat(arr2);
}

function mergeSort(arr){
  let midpoint = arr.length / 2;
  let arr1 = arr.slice(0, midpoint);
  let arr2 = arr.slice(midpoint);

  if(arr.length > 1){
    return merge(mergeSort(arr1), mergeSort(arr2))
  } else{
    return arr
  }
}