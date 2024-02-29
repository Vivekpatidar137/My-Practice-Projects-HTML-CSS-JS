const hambuger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener("click", () => {

  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// function search() {
//   let input = document.getElementById("search").value;
//   let headings = document.querySelectorAll("h2, h3");

//   headings.forEach(function(heading) {
//     if (heading.textContent.toLowerCase().indexOf(input.toLowerCase()) > -1) {
//       heading.style.color = "red";
//     } else {
//       heading.style.color = "";
//     }
//   });
// }

// search();

document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default form submission behavior

  var searchTerm = document.getElementById("search-input").value.trim();
  if (searchTerm.length > 0) {
    var headings = document.querySelectorAll("h2, h3");
    var found = false;

    for (var i = 0; i < headings.length; i++) {
      if (headings[i].textContent.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        headings[i].scrollIntoView();
        found = true;
        break;
      }
    }

    if (!found) {
      alert("No results found for '" + searchTerm + "'.");
    }
  } else {
    alert("Please enter a search term.");
  }
});




var moreText = document.getElementById("more-text");
var seeMoreLink = document.getElementById("see-more-link");

seeMoreLink.addEventListener("click", function(event) {
  event.preventDefault();
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    seeMoreLink.textContent = "See less";
  } else {
    moreText.style.display = "none";
    seeMoreLink.textContent = "See more";
  }
});


const apiKey = 'affZUh3ar2WV6FFdbcZnMV60vgBwfZR6RH6cfmf8';
const url = 'https://api.nasa.gov/planetary/apod';

let button = document.querySelector('#fetch-image');
let imageContainer = document.querySelector('.image-container');

// Fetch latest APOD image when page loads




function fechImage(date) {

  fetch(`${url}?api_key=${apiKey}&date=${date}`)
  .then(Response => Response.json())
  .then(data => {
      
    let image = document.createElement('img');
    image.src = data.url;
    image.alt = data.title;

    let imageTitle = document.createElement('h3');
    imageTitle.textContent = data.title;

    let imageExplanation = document.createElement('p');
    imageExplanation.textContent = data.explanation;

    imageContainer.appendChild(image);
    imageContainer.appendChild(imageTitle);
    imageContainer.appendChild(imageExplanation);


  })
  .catch(error => console.error(error));
}

fechImage('');

button.addEventListener('click', () => {
  imageContainer.innerHTML = '';

  let dateInput = document.querySelector('.image-input input');
  let date = dateInput.value;
  dateInput.value = '';

  fechImage(date);


})


