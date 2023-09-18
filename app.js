function position(letter){
  // Convert the letter to lower case to make the function case-insensitive
  letter = letter.toLowerCase();

  // Check if the input is a single letter
  if (letter.length !== 1 || !/[a-z]/.test(letter)) {
    return "Invalid input. Please provide a single alphabet letter.";
  }

  // Get the ASCII code of the letter and subtract the ASCII code of 'a' to get the position
  const position = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

  return `Position of alphabet: ${position}`;
}