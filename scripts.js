const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const app = document.getElementById("root")
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


const text = document.createElement('div')
text.setAttribute('class', 'text')
text.innerText = "Click on a pic to view!"
container.appendChild(text)


fetch(url)
.then(resp => {
    if(resp.ok) {
      return resp.json();
    }
    throw new Error('Something went wrong')
})

.then(data => {
    
    for(let drinks in data) {
        for (let drink in drinks){

        let drinkData = data[drinks][drink]
        
        let drinkName = drinkData["strDrink"];
        let drinkInstructions = drinkData["strInstructions"];
        let drinkImage = drinkData["strDrinkThumb"];

        let drinkIngredients = [drinkData["strIngredient1"], drinkData["strIngredient2"], drinkData["strIngredient3"], 
        drinkData["strIngredient4"], drinkData["strIngredient5"], drinkData["strIngredient6"], 
        drinkData["strIngredient7"], drinkData["strIngredient8"], drinkData["strIngredient9"], 
        drinkData["strIngredient10"] ];

        const card = document.createElement('div')
        card.setAttribute('class', 'card' )
        container.appendChild(card)
        
        const card_back = document.createElement('div')
        card_back.setAttribute('class', "card__face card__face--back")

        const name = document.createElement('h2')
        name.textContent = drinkName
        card_back.appendChild(name)
         
        const img = document.createElement('img')
        const card_front = document.createElement('div')
        card_front.setAttribute('class', "card__face card__face--front")
        img.src = drinkImage
        img.width="400"
        img.height="350"
        card_front.appendChild(img)
        
        for(let ingredient of drinkIngredients) {
            if (ingredient !== null) { 
            
               const ingredients = document.createElement('li')
               ingredients.setAttribute('class', 'ingredients' )
               
               ingredients.textContent = ingredient
               card_back.appendChild(ingredients)
           }
        }
        
        card.appendChild(card_front)
        card.appendChild(card_back)
        
        const instructions = document.createElement('p')
        instructions.textContent = drinkInstructions
        card_back.appendChild(instructions)

        card.addEventListener('click', flipCard = () => {card.classList.toggle("is-flipped")})
        
       }
        }
    }
)
.catch((error) => {
    console.log(error)
  })


















































        



 
    


