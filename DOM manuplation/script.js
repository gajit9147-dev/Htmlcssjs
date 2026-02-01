// Header greeting
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

// Update name ONLY on button click
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  greeting.textContent = `Hello ${name}`;
});

// Box hover color logic
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  const color = box.dataset.color;

  box.addEventListener("mouseenter", () => {
    box.style.background = color;
    box.style.color = "white";
  });

  box.addEventListener("mouseleave", () => {
    box.style.background = "white";
    box.style.color = "black";
  });
});
