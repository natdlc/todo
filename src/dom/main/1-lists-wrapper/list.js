import {insertListHeader} from './list-header.js';
import {insertSublistWrapper} from './sublist.js';

const insertList = parent => {
    const list = document.createElement('div');
    list.classList.add('list');
    insertListHeader(list);
    insertSublistWrapper(list);
    parent.appendChild(list);
};

export {insertList};