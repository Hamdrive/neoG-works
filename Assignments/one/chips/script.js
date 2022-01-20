const input = document.querySelector("input");
const chips = document.querySelector(".chips");

const handleUpdate = userFruit => {
    const div = document.createElement("div")
    div.setAttribute("class", "chip")
    const p = document.createElement("p")
    p.innerHTML = userFruit
    const cross = document.createElement("i")
    cross.setAttribute("class", "fas fa-times")

    div.appendChild(p)
    div.appendChild(cross)
    chips.appendChild(div)

}

const handleInput = (e) => {
  if (e.key === "Enter") {
    let newFruit = e.target.value;
    if (newFruit.length > 0) {
        handleUpdate(newFruit);
        input.value = "";
    }
  }
};

input.addEventListener("keyup", handleInput);
