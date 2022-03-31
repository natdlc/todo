import insertListHeader from './list-header.js';
import insertSublistWrapper from './sublist.js';

const insertList = parent => {
    const list = document.createElement('div');
    list.classList.add('list');
    insertListHeader(listsWrapper);
    insertSublistWrapper(listsWrapper);
    parent.appendChild(list);
};

export {insertList};