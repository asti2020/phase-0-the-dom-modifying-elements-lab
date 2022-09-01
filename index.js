let main = document.getElementById("main");
if (main.parentNode) {
  main.parentNode.removeChild(main);
}

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "My name is the champion"