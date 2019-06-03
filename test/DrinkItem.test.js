import DrinkItem from '../src/components/DrinkItem.js';

const test = QUnit.test;
QUnit.module('DrinkItem');

test('render template for drink item', (assert) => {
    //Arrange
    const drink = {
        strDrink: 'Margarita',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg'
    };

    //Act 
    // Call the function you're testing and set the result to a const

    const drinkItem = new DrinkItem({ drink });
    const rendered = drinkItem.renderTemplate();

    //Assert
    assert.htmlEqual(rendered, /*html*/ `
    <li>
        <h2>Margarita</h2>
        <img src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg" alt="Margarita">
    </li>
    `);
});