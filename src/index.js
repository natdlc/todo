import './reset.css';
import './style.css';
import * as DOM from './dom-inserts';

(function () {
    const DOMElements = DOM.insertStructure();

    const addSectionBtnClick = () => {
        const addSectionModal = DOM.addSection(DOMElements.main);
    };

    DOMElements.headerAddSectionBtn.addEventListener('click', addSectionBtnClick);
    
})();