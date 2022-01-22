const toggleBtn = document.querySelector(".button_badge-toggle");
const toggleBadge = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  toggleBadge.classList.toggle("toggle");
});
