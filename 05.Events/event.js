const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


let greenSquare = document.querySelector('.green')
let orangeSquare = document.querySelector('.orange')
let violetSquare = document.querySelector('.violet')
let allSquares = document.querySelectorAll('.actionsquare')
let allNewSquares = document.querySelectorAll('.displayedsquare')
let newSquareDiv = document.querySelector('.displayedsquare-wrapper')
let actionList = document.querySelector('ul')




//how to create a new square
/*
const newGreenSquare = () => {
    let newSquare = document.createElement('div');
    newSquareDiv.appendChild(newSquare);
    newSquare.classList.add("displayedsquare")
    newSquare.classList.add("green")
}

const newOrangeSquare = () => {
  let newSquare = document.createElement('div');
  newSquareDiv.appendChild(newSquare);
  newSquare.classList.add("displayedsquare")
  newSquare.classList.add("orange")
}

const newVioletSquare = () => {
  let newSquare = document.createElement('div');
  newSquareDiv.appendChild(newSquare);
  newSquare.classList.add("displayedsquare")
  newSquare.classList.add("violet")
}

greenSquare.addEventListener('click', newGreenSquare)
orangeSquare.addEventListener('click', newOrangeSquare)
violetSquare.addEventListener('click', newVioletSquare)*/


//function to create a new square
const createNewSquare = (color) => {
  let newSquare = document.createElement('div');
  newSquare.addEventListener('click', () => { //this will be used for the final part of the exercise, when the alert has to be done
    alertColor(newSquare.classList[1])
  })
  newSquareDiv.appendChild(newSquare);
  newSquare.classList.add("displayedsquare")
  newSquare.classList.add(color)
}

//function to add a li in the Action log
const addAnAction = (color) => {
  let actionList = document.querySelector('ul')
  let newLi = document.createElement('li');
  let newTimeStamp = document.createTextNode("A new " + color + " square was created at " + getElapsedTime())
  
  newLi.appendChild(newTimeStamp)
  actionList.appendChild(newLi)  
}



//Event listener on squares
allSquares.forEach(element => {
  element.addEventListener('click', () => {
  //console.log(element.classList[1])
  createNewSquare(element.classList[1])
  addAnAction(element.classList[1])
  allNewSquares = document.querySelectorAll('.displayedsquare')
  })
})




//__________________________________second part _______________________________
//function to create a random color
const generateRandomColor = () => {
  let randcolorsArray = []
    randcolorsArray.push(Math.floor(Math.random()*255))
    randcolorsArray.push(Math.floor(Math.random()*255))
    randcolorsArray.push(Math.floor(Math.random()*255))
    return ["rgb(",randcolorsArray[0],",",randcolorsArray[1],",",randcolorsArray[2],")"].join("");
}


//function to change the color with the spacebar
const changeBgColor = () => {
  document.body.style.backgroundColor = generateRandomColor()
}

//function to add a new li when spacebar
const addASpaceBarAction = () => {
  let newSpaceLi = document.createElement('li');
  let newSpaceTimeStamp = document.createTextNode("Space key was pressed at " + getElapsedTime())
  
  newSpaceLi.appendChild(newSpaceTimeStamp)
  actionList.appendChild(newSpaceLi)  
}

//event listener on space bar


//________________________l key deletes li___________________

//function that deletes lis
const clearLog = () => {
  while (document.querySelectorAll('li').length > 0) {
    actionList.removeChild(document.querySelector('li'))
  }
}


//_______________________s that deletes squares______________

//function that deletes squares
const clearSquares = () => {
  while (document.querySelectorAll('.displayedsquare').length > 0) {
  newSquareDiv.removeChild(document.querySelector('.displayedsquare'))
  }
}


//event listener on space or l or s keys
document.addEventListener('keypress', (event) => {
  console.log(event.code)
  if (event.code === 'Space') {
    changeBgColor()
    addASpaceBarAction()
  } else if (event.code === "KeyL") {
    clearLog()
  } else if (event.code === "KeyS") {
    clearSquares()
  }
})

//__________________________get an alert when click on a new square _______________

//function that puts a alert
const alertColor = (color) => {
  alert("This square is " + color)
}
