const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

const api = {
    getDrink() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;