import { translations } from "../tanslations/translationMain.js";

window.onload = function () {
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
  changeLanguage();
};
