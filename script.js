
  const textElement = document.getElementById("typedText");

  // The phrases you want to show in sequence
  const phrases = ["Coder", "Web Developer"];

  let currentPhrase = 0;
  let charIndex = 0;

  function typeNextCharacter() {
    const currentText = phrases[currentPhrase];
    textElement.textContent = currentText.slice(0, charIndex + 1);

    charIndex++;

    if (charIndex < currentText.length) {
      setTimeout(typeNextCharacter, 100); // speed of typing
    } else {
      // after finishing this phrase, wait, then switch
      setTimeout(() => {
        // clear text and start next phrase
        charIndex = 0;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typeNextCharacter();
      }, 1000); // time before next phrase starts
    }
  }

  // start typing when page loads
  window.addEventListener("load", typeNextCharacter);
