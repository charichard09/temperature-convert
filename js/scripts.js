function tempConvert() {
  const number1 = window.prompt("Please enter a number in degrees:");
  const tempChar = window.prompt("Will we be converting from C or F for temp"); 
  let temp = 0;

  if (tempChar.toUpperCase() === "C") {
    temp = (number1 * 9/5) + 32; 
  } else if (tempChar.toUpperCase() === "F") {
    temp = (number1 - 32) * (5/9);
  } else {
    return "ERROR: not an F or a C";
  }

  return temp;
}

window.alert(tempConvert());