//GitHub_exercises

/*
//to be copied in the console
console.log(document.title)
console.log(document.getElementsByTagName('title')[0].innerHTML) //because tagnames gives back a list of elements, we have to select which one we want

//modify the title:
let newTitle = "Modifying the DOM"
document.title = newTitle 

//new background color
document.body.style.backgroundColor = "#FF69B4"; 

//children elements

for ( let child of document.querySelectorAll('body', Element)) {
    console.log(child)
}*/

//index.html

//change the title of important img
let title = "This is an important item"
let imp = document.querySelectorAll('.important')

for (i=0; i<imp.length; i++) {
    imp[i].setAttribute('title', title)
}

//change the display
let img = document.querySelectorAll('img')


for (i=0; i<img.length; i++) {
    if (img[i].class !== 'important') {
        img[i].style.display = "none"
    }
}

//paragraphs

let para = document.querySelectorAll('p')

for (i=0; i<para.length; i++) {
    console.log(para[i].innerText)

    if (para[i].className) {
        console.log(para[i].className)
    }
} 

//random color on the paragraphs
for (i=0; i<para.length; i++) {
    if (para[i].className) {
    } else {
        para[i].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    }
} 
