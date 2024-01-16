// import axios from '/node_modules/axios';

const button = document.getElementById("darkmode");
const paragraph = document.querySelector("p");

export function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}

export function githubSearch(event) {
  var username = document.getElementById("username").value;
  // console.debug('what is formData', formData.entries())
  axios.get('https://api.github.com/users/octocat')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
}