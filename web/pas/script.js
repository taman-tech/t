function generatePassword() {
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const symbols = "@&$!?";
  const maxChar = 13;
  
  let name = nameInput.value.trim().toLowerCase();
  let generatedPassword = "";
  
  // Check if name input is not empty
  if (name !== "") {
    // Make first character of name uppercase
    name = name.charAt(0).toUpperCase() + name.slice(1);
    // Get a random number between 3 and maxChar
    const randomNumber = Math.floor(Math.random() * (maxChar - 3)) + 3;
    // Generate random symbols and numbers
    let randomSymbols = "";
    for (let i = 0; i < randomNumber; i++) {
      if (i % 2 === 0) {
        // Generate a random number between 0 and 9
        const randomNum = Math.floor(Math.random() * 10);
        randomSymbols += randomNum;
      } else {
        // Generate a random symbol from the symbols string
        const randomIndex = Math.floor(Math.random() * symbols.length);
        randomSymbols += symbols[randomIndex];
      }
    }
    // Combine name and symbols
    generatedPassword = name + randomSymbols;
    // Truncate the password to maxChar characters
    generatedPassword = generatedPassword.slice(0, maxChar);
  }
  
  passwordInput.value = generatedPassword;
}

document.getElementById("generate-btn").addEventListener("click", generatePassword);

document.getElementById("copy-btn").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  const result = window.confirm("ئه ته وێ پاسوۆرده كه كۆپی بكه ی!؟");

if (result) {
  // Copy password to clipboard
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  alert("پاسوۆرده كه كۆپی كرا!");
window.open("https://www.snapchat.com/add/tamo-tech", "_blank");
    alert("سناپی ئۆنه ر ئاد كرا!");

} 



});
