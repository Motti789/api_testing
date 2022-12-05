const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const app = document.getElementById("root")

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)



fetch(url)
.then(resp => 
 resp.json())

.then(data => {
    
    for(let drinks in data) {
        for (let drink in drinks){
        let drinkData = data[drinks][drink]
        
        let drinkName = drinkData["strDrink"];
        let drinkId =   drinkData["idDrink"];
        let instructions = drinkData["strInstructions"];

        let ingredients = [drinkData["strIngredient1"], drinkData["strIngredient2"], drinkData["strIngredient3"], 
        drinkData["strIngredient4"], drinkData["strIngredient5"], drinkData["strIngredient6"], 
        drinkData["strIngredient7"], drinkData["strIngredient8"], drinkData["strIngredient9"], 
        drinkData["strIngredient10"] ]; 
        
        const card_front = document.createElement('div')
        card_front.setAttribute('class', 'card_face_front')

        const h1 = document.createElement('h1')
        h1.textContent = drinkName

        const p1 = document.createElement('p')
        p1.textContent = instructions

        container.appendChild(card_front)
        card_front.appendChild(h1)
        card_front.appendChild(p1)
        
        for(let ingredient of ingredients) {
         if (ingredient !== null) { 
         
            const p2 = document.createElement('p')
            p2.textContent = ingredient
            card_front.appendChild(p2)
        }
       }
        }
    }
})
.catch(error => console.log("ERROR"))



// const logo = document.createElement('img')
// logo.src =  "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
// app.appendChild(logo)



const images = [
"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
"https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg", 
"https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
"https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
"https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
"https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
]

for(let image of images) {
  const pics = document.createElement('img')
  pics.setAttribute('class', 'drink_img')
  pics.src = image
  container.appendChild(pics)

}











































        



 
    


