

// let header = document.getElementsByClassName(header)
// let paragraph = document.getElementById(paragraph)

// header.innerText="new text"


// let box = document.querySelector(".header");
// box.style.backgroundColor = "gold";
// box.style.borderRadius = "10px"; // Turns a square into a circle!
// box.style.padding ="15px"

// let bodyElement = document.body;
// bodyElement.classList.toggle("dark-mode");

let hackerBody=document.querySelector("body")
let heading=document.querySelector(".header")
let paragraph=document.querySelector(".paragraph")
let hackButton=document.querySelector(".btn-1")
let resetButton=document.querySelector(".btn-2")

function performHack(){
    console.log('performing hack')
    heading.innerText="Your System has been Hacked"
    paragraph.innerText="Downloading your secret files..."

    // Modify classes & styles
      document.body.classList.add("hacker-style");
}

function resetHack(){
    console.log('reseting hack')
    heading.innerText="Welcome back"
    paragraph.innerText="your system has been saved"
    
    // Remove classes & styles
      document.body.classList.remove("hacker-style");
}

hackButton.addEventListener("click", performHack)
resetButton.addEventListener("click", resetHack)