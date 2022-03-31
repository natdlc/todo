import {insertList} from './10-list.js';

const insertListsWrapper = parent => {
    const listsWrapper = document.createElement('div');
    listsWrapper.classList.add('lists-wrapper');
    insertList(listsWrapper);
    parent.appendChild(listsWrapper);
};

export {insertListsWrapper};