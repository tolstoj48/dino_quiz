// Adds zeros in front of numbers
;function checkTime(i) {
  if (i < 10 && i > 0) {i = "0" + i};
  return i;
}

// Function to compare used in Array.sort ()
function compare(a, b) {
  const resultA = a[accordingToKey];
  const resultB = b[accordingToKey];

  let comparison = 0;
  if (resultA > resultB) {
    comparison = 1;
  } else if (resultA < resultB) {
    comparison = -1;
  }
  return comparison * -1;
}

// Function to compare used in Array.sort ()
function negativeCompare(a, b) {
  const resultA = a[accordingToKey];
  const resultB = b[accordingToKey];

  let comparison = 0;
  if (resultA > resultB) {
    comparison = 1;
  } else if (resultA < resultB) {
    comparison = -1;
  }
  return comparison;
}