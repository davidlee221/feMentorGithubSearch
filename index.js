// import axios from '/node_modules/axios';

const button = document.getElementById("dark-mode-text");
const paragraph = document.querySelector("p");

function updateButton() {
  if (button.innerText === "DARK") {
    button.innerText = "LIGHT";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "DARK";
    paragraph.textContent = "The machine is stopped.";
  }
}

function githubSearch(event) {
  var username = document.getElementById("username").value;
  // console.debug('what is formData', formData.entries())
  fetch('https://api.github.com/users/octocat')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
}