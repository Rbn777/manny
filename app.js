let togg1 = document.getElementById("button");
let d1 = document.getElementById("overlay");
togg1.addEventListener("click", () => {
  if(getComputedStyle(overlay).display != "none"){
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
})

let togg2 = document.getElementById("button2");
let d2 = document.getElementById("overlay");
togg2.addEventListener("click", () => {
  if(getComputedStyle(overlay).display != "none"){
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
})
