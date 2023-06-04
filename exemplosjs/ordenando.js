const swap = (array, pos1, pos2) => {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const shuffle = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const pos1 = Math.floor(Math.random() * length);
    const pos2 = Math.floor(Math.random() * length);
    swap(array, pos1, pos2);
  }
};

const bubble_sort = (array) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

const selection_sort = (array) => {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }
};

const partition = (array, start, end, pivot) => {
  let left = start;
  let right = end;

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const quick_sort = (array, start = 0, end = array.length - 1) => {
  if (start < end) {
    const pivot = array[Math.floor((start + end) / 2)];
    const partitionIndex = partition(array, start, end, pivot);
    quick_sort(array, start, partitionIndex - 1);
  }
}