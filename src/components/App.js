import Component from './Component.js';
import Header from './Header.js';
import DrinkList from './DrinkList.js';
import api from '../services/api.js';
import Loading from './Loading.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const loading = new Loading({ done: false });
        main.appendChild(loading.render());
        
        const drinkList = new DrinkList({ cocktail: { drinks: [] } });
        main.appendChild(drinkList.render());

        function loadDrink() {
            loading.update({ done: false });
            api.getDrink()
                .then(drinks => {
                    drinkList.update({ cocktail:drinks });
                })
                .finally(() => {
                    loading.update({ done: true });
                });
        }
        
        loadDrink();

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
            
    `;
    }
}

export default App;