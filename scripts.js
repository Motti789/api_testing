
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
        let ingredients1 = drinkData["strIngredient1"];
        let ingredients2 = drinkData["strIngredient2"];
        let ingredients3 = drinkData["strIngredient3"];
        let ingredients4 = drinkData["strIngredient4"];
        let ingredients5 = drinkData["strIngredient5"];
        let ingredients6 = drinkData["strIngredient6"];
        let ingredients7 = drinkData["strIngredient7"];
        let ingredients8 = drinkData["strIngredient8"];
        let ingredients9 = drinkData["strIngredient9"];
        let ingredients10 = drinkData["strIngredient10"];
        
        console.log(drinkName);
        
        console.log(ingredients1)
        console.log(ingredients2)
        console.log(ingredients3)
        console.log(ingredients4)
        console.log(ingredients5)
        console.log(ingredients6)
        console.log(ingredients7)
        console.log(ingredients8)
        console.log(ingredients9)
        console.log(ingredients10)

        console.log("")
        // console.log(instructions)
        }
    }
})







 
    


