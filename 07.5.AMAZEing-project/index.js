const LEVEL_1 = [
  ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*","S",".",".",".",".",".","*","*",".","*",".","T"],
  ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
  ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
  ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
  ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_2 = [
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".","S",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",".","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
  ["*",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","T"],
  ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]
]

const LEVEL_3 = [
  ["*","*","*","*","*","*","*","*"],
  ["*","*","*","*","S","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*","*","*","*",".","*","*","*"],
  ["*",".",".",".",".",".",".","*"],
  ["*",".","*","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*",".",".","*","*","*",".","*"],
  ["*","*",".","*","*","*","*","*"],
  ["*","T",".","*","*","*","*","*"],
  ["*","*","*","*","*","*","*","*"]
]


let main = document.querySelector("main")
let gameFrame = document.createElement("div")
gameFrame.classList.add("gameFrame")
main.appendChild(gameFrame) 


//creation of the maze

const mazeCreation = (level) => {
    for (i=0 ; i < level.length ; i++) {
        newRow = document.createElement("div")
        newRow.classList.add(`entireRow`)
        newRow.classList.add(`entireRow${i}`)
        gameFrame.appendChild(newRow)
        for (j=0 ; j < level[i].length ; j++) {
            let newElement = document.createElement("div")
            newElement.classList.add("unit")
            newElement.classList.add(`row${i}`)
            newElement.classList.add(`column${j}`)
            switch (level[i][j]) {
                case "*":
                    newElement.classList.add("wall")
                    break;
                case ".":
                    newElement.classList.add("path")
                    break;
                case "S":
                    newElement.classList.add("start")
                    break;
                case "T":
                    newElement.classList.add("treasure")
                    break;
            }
            newRow.appendChild(newElement)
        }
    }
}

mazeCreation(LEVEL_1)

//display it in grid
allRows = document.querySelectorAll(".entireRow")
allRows.forEach(element => {
    element.style.display = "flex"
});

//creation of the hero
hero = document.createElement("div")
hero.classList.add("hero")

startingPoint = document.querySelector(".start")
startingPoint.appendChild(hero)


//______________________LOGIC BEHIND MOVING
//when you move horizontally, you stay on the same row and change the column
//when you move vertically, you stay on the same column and change the row.

//the initial character has to be put on top of the div start
//so we have to add an event listener on the key pressed, and depeding where it asks us to move check the next case: if path, OK, if wall, NO, if treasure, perfect.

let currentPosition
let nextCase
let shouldMove = false

hero.addEventListener("keydown", (event) => {
    currentPosition = event.target.parentNode
    if (event.key == "ArrowDown") {
        //get the classlist
        currentRow = currentPosition.classList

        nextCase = document.querySelectorAll(".unit .row2")
    }
})

//what chatgpt told me

// Get the current element
let currentElement = document.querySelector("#myElement");

// Loop through all classes of the current element
// for (let i = 0; i < currentElement.classList.length; i++) {
//   let className = currentElement.classList[i];

//   // Check if the class starts with "row"
//   if (className.startsWith("row")) {
//     // Select the row with the class name
//     let row = document.querySelector(`.${className}`);
    
//     // Do something with the row element
//     console.log(row);
//     break;
//   }
// }