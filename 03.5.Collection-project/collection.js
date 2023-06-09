const collection = [
    {
        scientific_Name: "Ficus lyrata",
        common_Name: "Fiddle-leaf fig",
        origin: "West Africa",
        picture: "https://www.jardinpourvous.be/media/catalog/product/cache/3a7af0a8e0e317723249dc9098669163/f/d/fd20271wh.jpg",
        max_Size: 3,
        size: "3m in interior, 15m in the wild",
        light_icon: 2,
        light: "Bright but not direct",
        water_icon: 3,
        water: "Need quite a lot",
        fun_Fact: "They are strangling plants: they usually kill the host on which they are growing",
        toxicity_icon: 1, //if 1: toxic -> dark icon. if 2 -> non-toxic, grey icon
        toxicity: "Their latex can be toxic"
    },
    {
        scientific_Name: "Monstera deliciosa",
        common_Name: "Swiss cheese plant or split-leaf philodendron",
        origin: "tropical forests of southern latin america",
        picture: "https://media.s-bol.com/mOALpVZlR9n0/550x550.jpg",
        max_Size: 3,
        light: "can support subdued light",
        water: "Regular but moderate",
        fun_Fact: "The name 'Deliciosa' comes from their edible fruits. Holes on their leaves help them resist strong winds and rain, and also allows the light to reach the leaves under",
        toxicity: "Moderately toxic to cats and dogs",
        size: "2-3m inside, 20m in the wild",
        light_icon: 1,
        water_icon: 3,
        toxicity_icon: 1
    },
    {
        scientific_Name: "Alocasia zebrina",
        common_Name: "Zebra plant",
        origin: "Philippines",
        picture: "https://cdn.shopify.com/s/files/1/0061/6389/0289/products/AlocasiaZebrina_6d4f2d6f-1747-43d5-87a6-96a169d4d120_x700.jpg?v=1616559717",
        max_Size: 2,
        light: "Bright but not direct",
        water: "Soil needs to be humid at all time",
        fun_Fact: "Plants from the alocasia family are also called 'elephant ears' plants, due to the shape of their leaves",
        toxicity: "Leaves are toxic to cats and dogs",
        size: "2m, can reach 3m in the wild",
        light_icon: 2,
        water_icon: 3,
        toxicity_icon: 1
    },
    {
        scientific_Name: "Zamioculcas zamiifolia",
        common_Name: "ZZ",
        origin: "Eastern Africa",
        picture: "https://m.media-amazon.com/images/I/51RA0juIgrL.jpg",
        max_Size: 0.5,
        light: "Bright but not direct",
        water: "Regular but moderate",
        fun_Fact: "Their growth is very slow, they don't need repotting very often",
        toxicity: "no",
        size: "45-60cm",
        light_icon: 2,
        water_icon: 2,
        toxicity_icon: 2
    },
    {
        scientific_Name: "Pachira aquatica",
        common_Name: "Pachira",
        origin: "Central and South America",
        picture: "https://www.ikea.com/be/fr/images/products/pachira-aquatica-plante-en-pot-pachira__0653983_pe708212_s5.jpg?f=s",
        max_Size: 2,
        light: "Bright but not direct",
        water: "Regular but moderate",
        fun_Fact: "It's usually found with 5 feet braided together, which symbolises financial success in China",
        toxicity: "no",
        size: "2m inside, but can reach 10-20m in the wild",
        light_icon: 2,
        water_icon: 2,
        toxicity_icon: 2
    },
    {
        scientific_Name: "Codiaeum variegatum",
        common_Name: "Croton",
        origin: "Malaysia",
        picture: "https://cdn11.bigcommerce.com/s-fqh975/images/stencil/1280x1280/products/1532/1841/TMF-1610_Croton_Basket__30546.1661279126.jpg?c=2",
        max_Size: 1.8,
        light: "Bright but not direct",
        water: "Soil needs to be humid at all time",
        fun_Fact: "In New Caledonia, this plant symbolises the presence of ancesters",
        toxicity: "Their latex is toxic",
        size: "1,8m, but can reach 3m in the wild",
        light_icon: 2,
        water_icon: 3,
        toxicity_icon: 1
    },
    {
        scientific_Name: "Pilea peperomioides",
        common_Name: "Chinese money plant",
        origin: "South-West China",
        picture: "https://cdn.shopify.com/s/files/1/1706/1307/products/Pilea-peperomioides-Chinese-Money-Plant-Stemmed_1200x.jpg?v=1676907875",
        max_Size: 0.7,
        light: "Bright but not direct",
        water: "Regular but moderate",
        fun_Fact: "Tradition says that if you plant a coin in the soil, this plant will bring you prosperity",
        toxicity: "no",
        size: "can reach 60-80cm",
        light_icon: 2,
        water_icon: 2,
        toxicity_icon: 2
    },
    {
        scientific_Name: "Golden pothos or Devil's ivy",
        common_Name: "Epipremnum aureum",
        origin: "French Polynesia",
        picture: "https://monjardinurbain.com/wp-content/uploads/2021/09/1-Pothos-Golden-4MAIN_461x461_baaf0f8c-9936-4853-9c98-92820cd549b4.jpg",
        max_Size: 0.8,
        light: "Bright but not direct",
        water: "Regular but moderate",
        fun_Fact: "very easy to maintain, ideal for beginners",
        toxicity: "moderately toxic to cats and dogs",
        size: "can reach 80m",
        light_icon: 2,
        water_icon: 2,
        toxicity_icon: 1
    },
    {
        scientific_Name: "Goeppertia kegeljanii",
        common_Name: "Calathea musaica Network",
        origin: "South America ",
        picture: "https://www.exotenherz.de/media/image/product/2007/md/schattenpflanze-mit-ausgefallenem-blattmuster-calathea-musaica-network-14cm-topf-ca-40cm-hoch.jpg",
        max_Size: 1,
        light: "Bright but not direct",
        water: "Regular but moderate",
        fun_Fact: "Calathea leaves move during the day: they open in the morning and close at night",
        toxicity: "no",
        size: "1m inside, can reach 2m in the wild",
        light_icon: 2,
        water_icon: 2,
        toxicity_icon: 2
    },
    {
        scientific_Name: "Sansevieria trifasciata",
        common_Name: "Snake plant or mother-in-law's tongue",
        origin: "Tropical Western Africa",
        picture: "https://www.matelma.com/shop/foto/sizes/sansevieria_zeylanica_40_cm_1632472153_1-600.jpg",
        max_Size: 1.5,
        light: "Bright but not direct",
        water: "Moderate",
        fun_Fact: "They will bloom under stressing conditions",
        toxicity: "Leaves can be toxic if eaten",
        size: "0,5 to 1,5m",
        light_icon: 1,
        water_icon: 1,
        toxicity_icon: 2
    }
]

//variables
let cardList = document.querySelector('div.cards')


//Create the divPlantName
const createPlantName = (plant) => {
        plantNameText = document.createTextNode(plant.common_Name);
        plantNameH4 = document.createElement('h4');
        plantNameH4.appendChild(plantNameText);

    //create the div plantElements
    newDivPlantElements = document.createElement('div');
    newDivPlantElements.classList.add("plantElements");

        //create the div plantName
        newDivPlantName = document.createElement('div');
        newDivPlantName.classList.add("plantName");

        //organise the div plantName
        newHr = document.createElement('hr');
        newDivPlantName.appendChild(plantNameH4);
        newDivPlantName.appendChild(newHr);

    newDivPlantElements.appendChild(newDivPlantName)
}

//Create the plant size subsection
const createPlantSizeSection = (plant) => {
    plantSize = document.createElement('div')
    plantSize.classList.add('plantSize')
    plantSize.classList.add('cardSubSection')


        plantSizeIcon = document.createElement('i')
        plantSizeIcon.classList.add("fa-solid")
        plantSizeIcon.classList.add("fa-ruler-vertical")

        plantSizeValue = document.createTextNode(plant.max_Size)
        plantSizeText = document.createElement('p')
        plantSizeText.appendChild(plantSizeValue)
        
    plantSize.appendChild(plantSizeIcon)
    plantSize.appendChild(plantSizeText)
}

//Create the plant toxicity subsection
const createPlantToxSection = (plant) => {
    plantTox = document.createElement('div')
    plantTox.classList.add('plantTox')
    plantTox.classList.add('cardSubSection')


        plantToxIcon = document.createElement('i')
        plantToxIcon.classList.add("fa-solid")
        plantToxIcon.classList.add("fa-skull-crossbones")
            if (plant.toxicity_icon === 1) {
                plantToxIcon.style.color = 'red'
            } else {
                plantToxIcon.style.color = 'grey'
            }
    plantTox.appendChild(plantToxIcon)
}


//Create the chara section -> display = none, except on hover
const createCharaSection = (plant) => {

    chara = document.createElement('div')
    chara.classList.add("characteristics") 
    chara.classList.add("card-elements")

        //chara h5
        chara_h5 = document.createElement('h5')
        chara_text = document.createTextNode('Characteristics')
        chara_h5.appendChild(chara_text)
        

        //characteristics subsection
        chara_section = document.createElement('div')
        chara_section.classList.add('cardSection')

        createPlantSizeSection(plant)
        createPlantToxSection(plant)

        chara_section.appendChild(plantSize)
        chara_section.appendChild(plantTox)

    chara.appendChild(chara_h5)
    chara.appendChild(chara_section)

    chara.style.display = ('none')

}

//Create the light subsection
const createPlantLightSection = (plant) => {
    plantLight = document.createElement('div')
    plantLight.classList.add('plantLight')
        plantLightIcon1 = document.createElement('i')
        plantLightIcon1.classList.add("fa-regular")
        plantLightIcon1.classList.add("fa-sun")

            if (plant.light_icon >= 1) {
                plantLightIcon1.style.color = 'black'
            } else {
                plantLightIcon1.style.color = 'grey'
            }

        plantLightIcon2 = document.createElement('i')
        plantLightIcon2.classList.add("fa-regular")
        plantLightIcon2.classList.add("fa-sun")
            if (plant.light_icon >= 2) {
                plantLightIcon2.style.color = 'black'
            } else {
                plantLightIcon2.style.color = 'grey'
            }

        plantLightIcon3 = document.createElement('i')
        plantLightIcon3.classList.add("fa-regular")
        plantLightIcon3.classList.add("fa-sun")

            if (plant.light_icon >= 3) {
                plantLightIcon3.style.color = 'black'
            } else {
                plantLightIcon3.style.color = 'grey'
            }
            
    plantLight.appendChild(plantLightIcon1)
    plantLight.appendChild(plantLightIcon2)
    plantLight.appendChild(plantLightIcon3)
}

//create the water subsection
const createPlantWaterSection = (plant) => {
    plantWater = document.createElement('div')
    plantWater.classList.add("plantWater")
        plantWaterIcon1 = document.createElement('i')
        plantWaterIcon1.classList.add("fa-solid")
        plantWaterIcon1.classList.add("fa-droplet")

            if (plant.water_icon >= 1) {
                plantWaterIcon1.style.color = 'black'
            } else {
                plantWaterIcon1.style.color = 'grey'
            }

        plantWaterIcon2 = document.createElement('i')
        plantWaterIcon2.classList.add("fa-solid")
        plantWaterIcon2.classList.add("fa-droplet")

            if (plant.water_icon >= 2) {
                plantWaterIcon2.style.color = 'black'
            } else {
                plantWaterIcon2.style.color = 'grey'
            }

        plantWaterIcon3 = document.createElement('i')
        plantWaterIcon3.classList.add("fa-solid")
        plantWaterIcon3.classList.add("fa-droplet")

            if (plant.water_icon >= 3) {
                plantWaterIcon3.style.color = 'black'
            } else {
                plantWaterIcon3.style.color = 'grey'
            }
            
    plantWater.appendChild(plantWaterIcon1)
    plantWater.appendChild(plantWaterIcon2)
    plantWater.appendChild(plantWaterIcon3)
}

//Create the maintenance section -> display = none, except on hover
const createMainteSection = (plant) => {
    mainte = document.createElement('div')
    mainte.classList.add("card-elements")
    mainte.classList.add("maintenance")
    
        //H5
        mainte_h5 = document.createElement('h5')
        mainte_text = document.createTextNode('Maintenance')
        mainte_h5.appendChild(mainte_text)

    mainte.appendChild(mainte_h5)
            
        //mainte_section
        mainte_section = document.createElement('div')
        mainte_section.classList.add('cardSection')

        createPlantLightSection(plant)
        createPlantWaterSection(plant)

        mainte_section.appendChild(plantLight)
        mainte_section.appendChild(plantWater)
    
    mainte.appendChild(mainte_section)
    mainte.style.display = ('none')
}



//____________________CARDS CREATION_________________
const createCards = () => {
    for (i=0; i<collection.length; i++) {

        //create the card
        newCard = document.createElement('div');
        newCard.classList.add("cardFrame");
        newCard.style.backgroundImage = `url(${collection[i].picture})`
        newCard.style.backgroundSize = "cover"

        //get the image
        newCardImage = document.createElement('div');
        newCardImage.classList.add("emptyContainer");
        newCardImage.style.zIndex = "2"
        //newCardImage.src = collection[i].picture;

        //organise the card
        createPlantName(collection[i])
        newCard.appendChild(newCardImage);
        newCard.appendChild(newDivPlantElements);

        //Add chara & maintenance
        createCharaSection(collection[i])
        createMainteSection(collection[i])

        chara.classList.add("toBeHidden")
        mainte.classList.add("toBeHidden")

        newDivPlantElements.appendChild(chara)
        newDivPlantElements.appendChild(mainte)


        //add all the cards to the list
        cardList.appendChild(newCard)

        
    }
}

createCards()

let allCards = document.querySelectorAll(".cardFrame")
let allChara = document.querySelectorAll(".characteristics")
let allMainte = document.querySelectorAll(".maintenance")

let allContainers = document.querySelectorAll(".emptyContainer")
allContainers.forEach(element => {
    element.style.width = "300px"
    element.style.height = "300px"
    element.style.position = "absolute"
})


const revealInfo = (cardframe) => {
    let sectionsSelected = cardframe.querySelectorAll(".toBeHidden")
    sectionsSelected.forEach(element => {
        element.style.display = ('flex')
    })
}

const hideInfo = (cardframe) => {
    let sectionsSelected = cardframe.querySelectorAll(".toBeHidden")
    sectionsSelected.forEach(element => {
        element.style.display = ('none')
    })
}

allContainers.forEach(element => {
    element.addEventListener("mouseover", (e) => {
        console.log(e.target)
        revealInfo(e.target.parentNode)
        e.target.parentNode.style.backgroundColor = "lightgrey" 
        e.target.parentNode.style.backgroundBlendMode = "overlay";     
    })
    element.addEventListener("mouseleave", (e) => {
        hideInfo(e.target.parentNode)
        e.target.parentNode.style.backgroundBlendMode = "normal";
    })
})





