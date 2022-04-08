import {insertList} from '../dom/main/1-lists-wrapper/10-list.js';

class List {
    constructor(title) {
        this.title = title;
    }
}

const addListBtn = () => {
    const btn = document.querySelector('.add-list-btn');
    const listsWrapper = document.querySelector('.lists-wrapper');
    btn.addEventListener('click', e => {
        insertList(listsWrapper);
        addListToStorage();

        const dateSelected = document.querySelector('input[type=date]').value;
        const listsArr = JSON.parse(localStorage.getItem(dateSelected));

        // loop through all list items
        // attach event listener to each h1
        // use iterator to connect and update h1 content against storage array

        const listsDom = e.path[2].children[1].children;

        for (let i = 0; i < listsDom.length; i++) {
            const listDom = listsDom[i];
            const titleDom = listDom.children[0].children[1];

            titleDom.addEventListener('input', e => {
                listsArr[i].title = e.target.innerText;
                localStorage.setItem(dateSelected, JSON.stringify(listsArr));
                console.log(listsArr);
                console.log(localStorage);
            });
        }
    });
}

const addListToStorage = () => {
    const date = document.querySelector('input[type=date]');
    const newList = new List('');
    const listsArray = JSON.parse(localStorage.getItem(date.value));
    listsArray.push(newList);
    localStorage.setItem(date.value, JSON.stringify(listsArray));
    console.log(localStorage);
}

export {addListBtn};