import insertList from './list.js';

const insertListsWrapper = parent => {
    const listsWrapper = document.createElement('div');
    listsWrapper.classList.add('lists-wrapper');
    insertList(listsWrapper);
    parent.appendChild(insertListsWrapper);
};

export {insertListsWrapper};