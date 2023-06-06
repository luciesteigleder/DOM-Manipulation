
//create a new section with random bg color


let group = ["Pierre", "Paul", "Jacques"]

let newSec;
let newPara;
let newText;
let i
let randcolorsArray
let text_color
let array

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


//generates the new sections
const newContent = (array) => {

    for (i=0; i<group.length; i++) {

        newSec = document.createElement("section");
        newPara = document.createElement('p');
        newText = document.createTextNode(group[i]);

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



//color light or dark


