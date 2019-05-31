import DrinkItem from '../src/components/DrinkItem.js';

const test = QUnit.test;
QUnit.module('DrinkItem');

test('render template for drink item', (assert) => {
    //Arrange
    const drink = {
        strDrink: 'Margarita',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg',
        strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'
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
        <section>
            <p>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</p>
        </section>
    </li>
    `);
});