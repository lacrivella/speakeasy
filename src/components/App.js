import Component from './Component.js';
import Header from './Header.js';
import DrinkList from './DrinkList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const drinkList = new DrinkList();
        const drinkListDOM = drinkList.render();
        main.appendChild(drinkListDOM);

        
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