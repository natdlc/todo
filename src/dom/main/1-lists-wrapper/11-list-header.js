import {addSublistBtnEvent} from '../../../features/add-sublist.js';
import {listDelBtnEvent} from '../../../features/del-list.js';
import {listCheckmarkEvent} from '../../../features/list-checkmark.js';

const insertListHeader = parent => {
    const listHeader = document.createElement('div');
    listHeader.classList.add('list-header');
    insertListCheckmark(listHeader); 
    insertListTitle(listHeader);
    insertAddSublistBtn(listHeader);
    insertPriorityIndicator(listHeader);
    insertDelBtn(listHeader);
    parent.appendChild(listHeader);
};

const insertListCheckmark = parent => {
    const btn = document.createElement('button');
    btn.classList.add('list-checkmark');
    btn.addEventListener('mouseup', listCheckmarkEvent);
    btn.innerHTML = '&#10004;';
    parent.appendChild(btn);
};

const insertListTitle = parent => {
    const h1 = document.createElement('h1');
    h1.classList.add('list-title');
    h1.setAttribute('contenteditable', '');
    parent.appendChild(h1);
};

const insertAddSublistBtn = parent => {
    const btn = document.createElement('button');
    btn.classList.add('add-sublist-btn');
    btn.innerText = 'Add Sublist';
    btn.addEventListener('click', addSublistBtnEvent);
    parent.appendChild(btn);
};

const insertPriorityIndicator = parent => {
    const p = document.createElement('p');
    p.innerText = '!';
    p.classList.add('medium-priority-indicator');
    parent.appendChild(p);
}

const insertDelBtn = parent => {
    const btn = document.createElement('button');
    btn.classList.add('del-list-btn');
    btn.innerHTML = '&#10060;'
    btn.addEventListener('click', listDelBtnEvent);
    parent.appendChild(btn);
}

export {insertListHeader};