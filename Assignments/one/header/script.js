const collapseHeader = document.querySelector(".collapse-nav");
const collapseWin = document.querySelector(".collapse");
const short = document.querySelector(".short");
const title = document.querySelector(".header-title");
const download = document.querySelector(".header-download");

collapseWin.addEventListener("scroll", (evt) => {
  const distTop = collapseWin.scrollTop;

  if (distTop > 0) {
    collapseHeader.children[0].children[1].style.display = "none";
    collapseHeader.children[1].children[0].style.display = "none";
    collapseHeader.classList.add("short");
  } else {
    collapseHeader.children[0].children[1].style.display = "inline";
    collapseHeader.children[1].children[0].style.display = "inline";

    collapseHeader.classList.remove("short");
  }
});
