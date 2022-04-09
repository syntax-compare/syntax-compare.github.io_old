const toggleBtns = document.querySelectorAll(
  ".js-lang-toggle-btn, .remained-container > .button"
);

const pythonContents = document.querySelectorAll(".python");
const kotlinContents = document.querySelectorAll(".kotlin");
const jsContents = document.querySelectorAll(".javascript");
const unrealContents = document.querySelectorAll(".cpp-unreal");

const langMap = new Map();
langMap.set("python", pythonContents);
langMap.set("kotlin", kotlinContents);
langMap.set("javascript", jsContents);
langMap.set("cpp-unreal", unrealContents);

function removeItem(arr, item) {
  return arr.filter((f) => f !== item);
}

// Check local storage
let selectedLangs = localStorage.getItem("selectedLangs")
  ? JSON.parse(localStorage.getItem("selectedLangs"))
  : ["python", "kotlin"];
console.log("selectedLangs:", selectedLangs);

toggleBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetLang = button.getAttribute("target_lang");

    if (selectedLangs.includes(targetLang)) {
      selectedLangs = removeItem(selectedLangs, targetLang);
    } else {
      selectedLangs.push(targetLang);
    }
    localStorage.setItem("selectedLangs", JSON.stringify(selectedLangs));

    const contents = langMap.get(targetLang);
    contents.forEach((content, index) => {
      content.classList.toggle("selected");
    });
  });
});

// initial select
selectedLangs.forEach((lang) => {
  const contents = langMap.get(lang);
  contents.forEach((content, index) => {
    content.classList.toggle("selected");
  });
});
