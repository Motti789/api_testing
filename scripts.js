
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


fetch(url)
.then(resp => resp.json())
.then(data => {
    for(let drinks in data) {
        for (let drink in drinks){
        let drinkData = data[drinks][drink]
        let drinkName = drinkData["strDrink"];
        let drinkId =   drinkData["idDrink"];
        let instructions = drinkData["strInstructions"];
        let ingredients1 = drinkData["strIngredient1"]
        let ingredients2 = drinkData["strIngredient2"]
        console.log(drinkName);
        
        console.log(ingredients1)
        console.log(ingredients2)
        console.log("")
        // console.log(instructions)
        }
    }
})







 
    


