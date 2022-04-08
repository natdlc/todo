import {insertListHeader} from './11-list-header.js';

const insertList = parent => {
    const list = document.createElement('div');
    list.classList.add('list');
    insertListHeader(list);
    parent.appendChild(list);
};

export {insertList};