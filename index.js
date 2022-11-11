// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }

// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");

//   // what to do when click detected.
// });

// function() {

// }

// Detecting Button Press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // this.style.color = "white";
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detaching Keyboard press
document.addEventListener("keydown", function (event) {
  console.log(event);
  // alert("Key was pressed");
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "a":
      let tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "s":
      let tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;

    case "d":
      let tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
