const app = document.getElementById("root")

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)


// const logo = document.createElement('img')
// logo.src =  "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
// app.appendChild(logo)



const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


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
        // console.log("")
        // console.log("Id:",drinkId)
        // console.log("Name:", drinkName);
       

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = drinkName

        const p1 = document.createElement('p')
        p1.textContent = instructions

        

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p1)
        
        
        
        for(let ingredient of ingredients) {
         if (ingredient !== null) { 
         
            const p2 = document.createElement('p')
            p2.textContent = ingredient
            card.appendChild(p2)
        }
       }
        }
    }
})
.catch(error => console.log("ERROR"))










        



 
    


