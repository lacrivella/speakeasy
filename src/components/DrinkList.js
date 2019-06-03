import Component from './Component.js';
import DrinkItem from './DrinkItem.js';

class DrinkList extends Component {
    render() {
        const dom = this.renderDOM();
        console.log(this.props.cocktail.drinks);
        
        this.props.cocktail.drinks.forEach(drink => {
            console.log(drink);
            const drinkItem = new DrinkItem({ drink });
            
            dom.appendChild(drinkItem.render());
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
        <ul>
        </ul>

    `;
    }
}

export default DrinkList;