const app = document.getElementById("root")
const container = document.createElement('div')
app.appendChild(container)
console.log(container)









// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


// fetch(url)
// .then(resp => 
//  resp.json())

// .then(data => {
    
//     for(let drinks in data) {
//         for (let drink in drinks){
//         let drinkData = data[drinks][drink]
        
//         let drinkName = drinkData["strDrink"];
//         let drinkId =   drinkData["idDrink"];
//         let instructions = drinkData["strInstructions"];

//         let ingredients = [drinkData["strIngredient1"], drinkData["strIngredient2"], drinkData["strIngredient3"], 
//         drinkData["strIngredient4"], drinkData["strIngredient5"], drinkData["strIngredient6"], 
//         drinkData["strIngredient7"], drinkData["strIngredient8"], drinkData["strIngredient9"], 
//         drinkData["strIngredient10"] ]; 
//         console.log("")
//         console.log("Id:",drinkId)
//         console.log("Name:", drinkName);
        
//         for(let ingredient of ingredients) {
//          if (ingredient !== null) { 
//             console.log(ingredient)
//         }
//        }
//        console.log("Instructions:", instructions)
     
//         }
//     }
// })
// .catch(error => console.log("ERROR"))









 
    


