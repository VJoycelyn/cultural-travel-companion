// popup.js

document.getElementById("translateButton").addEventListener("click", function() {
  const inputText = document.getElementById("inputText").value;
  const targetLanguage = document.getElementById("languageSelect").value;

  // Use Google Translate API (or your preferred translation API)
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|${targetLanguage}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const translatedText = data.responseData.translatedText;
      document.getElementById("translatedText").textContent = translatedText; // Display translated text
    })
    .catch(error => {
      console.error("Translation failed: ", error);
      document.getElementById("translatedText").textContent = "Error: Translation failed.";
    });
});

  
