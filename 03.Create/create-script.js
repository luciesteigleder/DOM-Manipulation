
//create a new section with random bg color


let group = ["Pierre", "Paul", "Jacques"]

let newSec;
let newPara;
let newText;
let i
let randcolorsArray
let text_color
let array
let orderArray = []
let order1 = Math.random()
let order2 = Math.random()
let order3 = Math.random()

//Create a random array for the colors
const arrayRandomColorFunction = () => {
    randcolorsArray = []
    randcolorsArray.push(Math.floor(Math.random()*255))
    randcolorsArray.push(Math.floor(Math.random()*255))
    randcolorsArray.push(Math.floor(Math.random()*255))
    return randcolorsArray
}

//change the random array into a rgb
const rgb = (array) => {
    return ["rgb(",array[0],",",array[1],",",array[2],")"].join("");
  }

// generates a random rgb
const randomColor = () => {
    return rgb(arrayRandomColorFunction())
}

//determines the text color depending on the array
//brightness  =  sqrt( .299 R2 + .587 G2 + .114 B2 ) found on http://alienryderflex.com/hsp.html
const lightOrDark = (array) => {
    brightRed = 0.299 * Math.pow(array[0],2)
    brightGreen = 0.587 * Math.pow(array[1],2)
    brightBlue = 0.114 * Math.pow(array[2],2)
    brightness = Math.sqrt(brightRed + brightGreen + brightBlue)
    console.log(brightness)
    text_color = []
        if (brightness > 127) {
            text_color = [0,0,0]
        } else {
            text_color = [255,255,255]
        }
    return text_color
}


const randomOrder = () => {
    let order1 = Math.random()
    let order2 = Math.random()
    let order3 = Math.random()

    if (order1 > order2 && order1 > order3) {
        orderArray[0] = 0;
        if (order2 > order3) {
            orderArray[1] = 1;
            orderArray[2] = 2;
        } else {
            orderArray[1] = 2;
            orderArray[2] = 1;
        }
    } else if (order2 > order1 && order2 > order3 ) {
        orderArray[0] = 1;
        if (order1 > order3) {
            orderArray[1] = 0;
            orderArray[2] = 2;
        } else {
            orderArray[1] = 2;
            orderArray[2] = 0;
        }
    } else if (order3 > order1 && order3 > order2 ) {
        orderArray[0] = 2;
        if (order1 > order2) {
            orderArray[1] = 0;
            orderArray[2] = 1;
        } else {
            orderArray[1] = 1;
            orderArray[2] = 0;

        }
    }
    return orderArray
}


//generates the new sections
const newContent = (array) => {
    randomOrder()

    for (i=0; i<group.length; i++) {

        newSec = document.createElement("section");
        newPara = document.createElement('p');
        newText = document.createTextNode(group[orderArray[i]]);

        newPara.appendChild(newText)
        newSec.appendChild(newPara)
        newSec.style.backgroundColor = randomColor ()
        newSec.style.color = rgb(lightOrDark(randcolorsArray
        ))

        position = document.querySelector('article')
        position.appendChild(newSec)
    }
}

newContent(group)



