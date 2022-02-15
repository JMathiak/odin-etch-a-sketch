let color = "navy";
let size = 80;
function makeGrid() {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let box = document.createElement("div");
      box.className = "box";
      box.style.backgroundColor = "white";
      let sizes = 600 / size;
      box.style.width = sizes + "px";
      box.style.height = sizes + "px";

      box.addEventListener("mouseover", function () {
        console.log(box.className);
        //box.style.border = color + " 1px solid";
        box.style.backgroundColor = color;
      });
      row.appendChild(box);
    }
    document.getElementById("gridContainer").appendChild(row);
  }
}

// function makeGrid(size){

// }

function makeButtons() {
  let div = document.createElement("div");
  let but = document.createElement("button");
  but.textContent = "clear";
  but.addEventListener("click", function () {
    for (let i = 0; i < size * size; i++) {
      document.getElementsByClassName("box")[i].style.backgroundColor = "white";
      // document.getElementsByClassName("box")[i].style.border =
      //("black 1px solid");
    }
  });

  let but2 = document.createElement("button");
  but2.textContent = "red";
  but2.addEventListener("click", function () {
    color = "red";
  });
  div.appendChild(but);
  div.appendChild(but2);
  document.getElementById("buttonContainer").appendChild(div);
}
makeGrid();
makeButtons();

/*
To Do:
Add color changing option, whether its a drop down or something else.
Allow for user to change size of etch a sketch that takes the same amount of total size.
*/
