// function linear returns very first location of target in array (0 indexed)
// else returns -1

const linear = (arr, target) => {
  let found = -1;
  // run a loop on all elements in arr
  arr.forEach((element, i) => {
    if (element === target) found = i;
  });

  return found;
};
