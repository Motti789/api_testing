
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  async function getDrinks(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
  };

  getDrinks(url);
    


