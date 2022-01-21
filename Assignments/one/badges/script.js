const toggleBtn = document.querySelector(".button_badge-toggle");
const toggleBadge = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  let selector = toggleBadge.classList;
  if (selector.contains("toggle")) selector.remove("toggle");
  else selector.add("toggle");
});
