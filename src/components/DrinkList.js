import Component from './Component.js';

class DrinkList extends Component {
    renderTemplate() {
        return /*html*/ `
        <ul>
            <li>
                <h2>Margarita</h2>
                <img src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg">
                <section>
                    <p>
                        Rub the rim of the glass with the lime slice to make the salt stick to it.
                        Take care to moisten only the outer rim and sprinkle the salt on it.
                        The salt should present to the lips of the imbiber and never mix into the cocktail.
                        Shake the other ingredients with ice, then carefully pour into the glass.
                    </p>
                </section>
            </li>
            <li>
                <h2>Blue Margarita</h2>
                <img src="https://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg">
                <section>
                    <p>
                    Rub rim of cocktail glass with lime juice. 
                    Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, 
                    strain into the salt-rimmed glass, and serve.
                    </p>
                </section>
            </li>
            <li>
                <h2>Tommy's Margarita</h2>
                <img src="https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg">
                <section>
                    <p>
                    Shake and strain into a chilled cocktail glass.
                    </p>
                </section>
            </li>
        </ul>

    `;
    }
}

export default DrinkList;