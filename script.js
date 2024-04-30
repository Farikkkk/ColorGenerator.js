const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  container.append(colorContainerEl);
}

const colorContainer = document.querySelectorAll(".color-container");

generateColors();
randomColor();

function generateColors() {
  colorContainer.forEach((item) => {
    let newColorCode = randomColor();
    item.innerHTML = `#${newColorCode}`;
    item.style.backgroundColor = `#${newColorCode}`;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  let colorCode = "";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
