
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
        let image = drinkData["strDrinkThumb"];

        

        let ingredients = [drinkData["strIngredient1"], drinkData["strIngredient2"], drinkData["strIngredient3"], 
        drinkData["strIngredient4"], drinkData["strIngredient5"], drinkData["strIngredient6"], 
        drinkData["strIngredient7"], drinkData["strIngredient8"], drinkData["strIngredient9"], 
        drinkData["strIngredient10"] ];
        
        const card = document.createElement('div')
        card.setAttribute('class', 'card' )
        container.appendChild(card)
        
        const card_back = document.createElement('div')
        card_back.setAttribute('class', "card__face card__face--back")

        const h2 = document.createElement('h2')
        h2.textContent = drinkName

        const p1 = document.createElement('p')
        p1.textContent = instructions

        const img = document.createElement('img')
        const card_front = document.createElement('div')
        card_front.setAttribute('class', "card__face card__face--front")
        img.src = image
        img.width="400"
        img.height="350"
        card_front.appendChild(img)
        card_back.appendChild(h2)

        for(let ingredient of ingredients) {
            if (ingredient !== null) { 
            
               const p2 = document.createElement('li')
               p2.setAttribute('class', 'ingredients' )
               
               p2.textContent = ingredient
               card_back.appendChild(p2)
               
           }
        }
        
        card.appendChild(card_front)
        card.appendChild(card_back)
        
        card_back.appendChild(p1)

        card.addEventListener('click', flipCard)

        function flipCard() {
            card.classList.toggle("is-flipped")
        }
        
       
        
       }
        }
    }
)
.catch(error => console.log("ERROR"))


















































        



 
    


