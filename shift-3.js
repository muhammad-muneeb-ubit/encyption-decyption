document.addEventListener("DOMContentLoaded", function () {
    const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const outputDiv = document.querySelector("#result");
  
    const encryptButton = document.getElementById("encryptButton");
    if (encryptButton) {
      encryptButton.addEventListener("click", function () {
        const userInput = document.getElementById("plainText").value;
        if (userInput) {
          const encryptedText = caesarCipher(userInput, 3);
          outputDiv.textContent = "Encrypted Text: " + encryptedText;
        } else {
          alert("Please enter some text to encrypt.");
        }
      });
    }
    const decryptButton = document.getElementById("decryptButton");
    if (decryptButton) {
      decryptButton.addEventListener("click", function () {
        const userInput = document.getElementById("ctText").value;
        if (userInput) {
          const decryptedText = caesarCipher(userInput, -3);
          outputDiv.textContent = "Decrypted Text: " + decryptedText;
        } else {
          alert("Please enter some text to decrypt.");
        }
      });
    }
  
    function caesarCipher(text, shift) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];
        if (uppercaseAlphabet.includes(currentChar)) {
          let currentIndex = uppercaseAlphabet.indexOf(currentChar);
          let newIndex = (currentIndex + shift) % 26;
          if (newIndex < 0) {
            newIndex += 26;
          }
          result += uppercaseAlphabet[newIndex];
        } else if (lowercaseAlphabet.includes(currentChar)) {
          let currentIndex = lowercaseAlphabet.indexOf(currentChar);
          let newIndex = (currentIndex + shift) % 26;
          if (newIndex < 0) {
            newIndex += 26;
          }
          result += lowercaseAlphabet[newIndex];
        } else {
          result += currentChar;
        }
      }
      return result;
    }
    
  });
  