function tempConvert() {
  const number1 = window.prompt("Please enter a number in degrees:");
  const tempChar = window.prompt("Please enter a C or F for temp"); 
  let temp = 0;
  
  if (tempChar === "C") {
    temp = (number1 - 32) * (5/9); 
  } else {
    temp = number1 * (9/5) + 32;
  }

  return temp
}

window.alert(tempConvert());