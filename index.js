findMinAndRemoveSorted = (arr) => {
  let min = arr[0]
  let i = 1
  while (i < arr.length) {
    if (arr[i] < min) {
      min = arr[i]
    }
    i++;
  }
  let pos = arr.indexOf(min)
  return arr.splice(pos, 1)[0]
}

function merge(nums1, nums2) {
  let i = nums1.length - 1
  let j = nums2.length - 1
  let k = i + j + 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
  return nums1
}

function mergeSort(arr) {
  if (arr.length <= 1){
    return arr
  }

  let firstHalf = arr.slice(0, arr.length / 2)
  let secondHalf = arr.slice(arr.length / 2)
 
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}