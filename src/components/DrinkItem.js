import Component from './Component.js';

class DrinkItem extends Component {
    renderTemplate() {
        const drink = this.props.drink;
        console.log('hi', this.props.drink);
        return /*html*/ `
            <li>
                <h2>${drink.strDrink}</h2>
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <section>
                    <p>${drink.strInstructions}</p>
                </section>
            </li>
            
    `;
    }
}

export default DrinkItem;