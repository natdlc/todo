import {insertList} from '../dom/main/1-lists-wrapper/10-list.js';

const addList = () => {
    const btn = document.querySelector('.add-list-btn');
    const listsWrapper = document.querySelector('.lists-wrapper');
    btn.addEventListener('click', () => insertList(listsWrapper));
}

export {addList};