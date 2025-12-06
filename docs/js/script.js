const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "Switch to Light Mode";
  } else {
    btn.textContent = "Switch to Dark Mode";
  }
});

