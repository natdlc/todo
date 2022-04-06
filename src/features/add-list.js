import {insertList} from '../dom/main/1-lists-wrapper/10-list.js';
//when user clicks add list
    //create a new list object
    //populate list object with title

class List {
    constructor(title) {
        this.title = title;
    }
}
    
const addListBtn = () => {
    const btn = document.querySelector('.add-list-btn');
    const listsWrapper = document.querySelector('.lists-wrapper');
    btn.addEventListener('click', () => {
        insertList(listsWrapper)
        // addListToStorage();
    });
}

const addListToStorage = () => {
    const date = document.querySelector('input[type=date]');
    localStorage.getItem(date.value);
    console.log(localStorage);
}

export {addListBtn};