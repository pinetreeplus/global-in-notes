// alert()

window.alert("Hello world!");
alert("Hello world!");

// confirm()
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Do you want to open in new tab?")) {
    window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/open");
  } else {
    log.innerText = "Glad you're staying!";
  }
});


// window.open()

// Opening in new tab
window.open("https://www.mozilla.org/", "mozillaTab");

// Opening pop-up
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");

// Control size of the new pop-up
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open(
  "https://www.mozilla.org/",
  "mozillaWindow",
  windowFeatures,
);
if (!handle) {
  // The window wasn't allowed to open
  // This is likely caused by built-in popup blockers.
  // …
}