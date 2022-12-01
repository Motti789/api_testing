
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


fetch(url)
.then(resp => resp.json())
.then(data => {
    for(let dat in data) {
     console.log(data[dat])
    }
})







// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


// fetch(url)
// .then(resp => resp.json())
// .then(data => {
//     for(let dat in data) {
//         for (let da in dat){
//         console.log(data[dat][da]["strDrink"])
//         }
//         // console.log(data[dat][0]["strDrink"])
//     }
// })






 
    


