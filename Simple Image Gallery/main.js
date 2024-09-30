const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

for (const picsArray of imageArray) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${picsArray}`);
  thumbBar.appendChild(newImage);

  newImage.addEventListener(
    "click",
    (e) => (displayedImage.src = e.target.src)
  );
}

btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else if (btn.getAttribute("class") === "light") {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
/* Wiring up the Darken/Lighten button */
