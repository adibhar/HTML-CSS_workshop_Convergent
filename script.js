// script.js

// Function to change the text when button is clicked
function homeText() {
  document.getElementById("myParagraph").innerText = "A simple website that with some information about me.";
}
function aboutText() {
  document.getElementById("myParagraph").innerHTML = "I'm an 18 year old Computer Science major at the University of Texas at <br> Austin. I'm a part of the digital arts and media"
                                                      + " subteam, and I'm currently working on a Chrome extension for my team's Convergent project.";
}
function projectText() {
  document.getElementById("myParagraph").innerText = "I don't have any published projects yet. I'm currently working on a simple Rubik's cube algorithm learning"
                                                      + " website through HTML, CSS, and JS. The base project is done, but I'm working on refining it (not public yet).";
}
function contactText() {
  document.getElementById("myParagraph").innerHTML = "Email: abhar@utexas.edu <br> GitHub: adibhar <br> Slack: Aditya Bhardwaj";
}
