import { translations } from "../tanslations/translationMain.js";
import { supportedLanguages } from "../tanslations/languages.js";

// Function to check if the browser language is supported
function isLanguageSupported(language) {
  return supportedLanguages.hasOwnProperty(language);
}
window.onload = function () {
  // Function to set up the language options in the select element
  function setUpLanguageOptions() {
    const languageSelector = document.getElementById("languageSelector");

    // Clear existing options
    languageSelector.innerHTML = "";

    // Create and append options for each supported language
    for (const languageCode in supportedLanguages) {
      if (supportedLanguages.hasOwnProperty(languageCode)) {
        const option = document.createElement("option");
        option.value = languageCode;
        option.text = supportedLanguages[languageCode];
        languageSelector.appendChild(option);
      }
    }
  }

  // Function to set the default language based on the browser language
  function setDefaultLanguage() {
    const browserLanguage = navigator.language.substring(0, 2);

    if (isLanguageSupported(browserLanguage)) {
      // Set the default language to the browser language
      const languageSelector = document.getElementById("languageSelector");
      languageSelector.value = browserLanguage;

      console.info("Default language: " + browserLanguage);
    }
  }

  function changeLanguage() {
    // Get the selected language
    const languageSelector = document.getElementById("languageSelector");
    const selectedLanguage = languageSelector.value;

    // Select the element containing the larger text
    const largerTextElement = document.getElementById("largerText");

    // Select elements based on the translation key attribute
    const translatableElements = document.querySelectorAll(
      "[data-translation-key]"
    );

    // Iterate over the translatable elements and replace the text content
    translatableElements.forEach((element) => {
      const translationKey = element.dataset.translationKey;
      const translation =
        translations[translationKey][selectedLanguage] || translationKey;
      element.textContent = translation;
    });

    // Get the translation for the larger text based on the selected language
    const LongTranslationKey = "DESCRIPTION";
    const LongTranslation =
      translations[LongTranslationKey][selectedLanguage] || LongTranslationKey;

    // Update the HTML content of the element with the translated text
    largerTextElement.innerHTML = LongTranslation;

    console.info("Changed language: " + selectedLanguage);
  }

  // Attach the changeLanguage function to the language selector's change event
  document
    .getElementById("languageSelector")
    .addEventListener("change", changeLanguage);

  // set up initial language
  setUpLanguageOptions();
  setDefaultLanguage();
  changeLanguage();
};
