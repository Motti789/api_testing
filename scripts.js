
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


// fetch(url)
// .then(resp => resp.json())
// .then(data => {
//     for(let dat in data) {
//      console.log(data[dat])
//     }
// })







// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


fetch(url)
.then(resp => resp.json())
.then(data => {
    for(let drinks in data) {
        for (let drink in drinks){
        let drinkName = data[drinks][drink]["strDrink"];
        let drinkId = data[drinks][drink]["idDrink"];
        console.log(drinkName)
        }
  
    }
})






 
    


