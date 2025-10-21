let countNumber = document.querySelector(".number");
let currentNumber = parseInt(localStorage.getItem("oldData")) || 0;
let buttons = document.querySelectorAll("button");

function swithColors() {
  if (currentNumber > 0) {
    countNumber.style.color = "darkGreen";
  } else if (currentNumber < 0) {
    countNumber.style.color = "red";
  } else if (currentNumber == 0) {
    countNumber.style.color = "black";
  }
}

// Initialize page with current number and color
countNumber.textContent = currentNumber;
swithColors();

for (const button of buttons) {
  button.addEventListener("click", () => {
    let clickedButton = button.textContent;

    if (clickedButton.includes("increase")) {
      currentNumber++;
    } else if (clickedButton.includes("decrease")) {
      currentNumber--;
    } else if (clickedButton.includes("reset")) {
      currentNumber = 0;
    }

    // Update the number and color
    countNumber.textContent = currentNumber;
    swithColors();

    // Save the updated number to localStorage
    localStorage.setItem("oldData", currentNumber);
  });
}
