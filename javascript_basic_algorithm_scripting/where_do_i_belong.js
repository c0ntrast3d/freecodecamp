/*
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted.
The returned value should be a number.
*/

function getIndexToIns(arr, num) {
  arr.sort(
    function(a, b) {
      return a - b;
    }
  );

  var result = 0;
  for(var counter = 0; counter < arr.length; counter++) {
    if(num > arr[counter]) {
      result = counter + 1;
    }
  }
  return result;
}

getIndexToIns([40, 60], 50);
