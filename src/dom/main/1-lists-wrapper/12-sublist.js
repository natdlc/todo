import {listDelBtnEvent} from '../../../features/del-sublist.js';
import {sublistCheckmarkEvent} from '../../../features/sublist-checkmark.js';

const insertSublistWrapper = parent => {
    const sublistWrapper = document.createElement('div');
    sublistWrapper.classList.add('sublist-wrapper');
    insertSublistCheckmark(sublistWrapper);
    insertSublistDesc(sublistWrapper);
    insertSublistTime(sublistWrapper);
    insertSublistDuration(sublistWrapper);
    insertPrioritySelection(sublistWrapper);
    insertDelBtn(sublistWrapper);
    parent.appendChild(sublistWrapper);
};

const insertSublistCheckmark = parent => {
    const btn = document.createElement('button');
    btn.classList.add('sublist-checkmark', 'list-checkmark');
    btn.innerHTML = '&#10004;';
    btn.addEventListener('click', sublistCheckmarkEvent);
    parent.appendChild(btn);
};

const insertSublistDesc = parent => {
    const p = document.createElement('p');
    p.classList.add('sublist', 'sublist-desc');
    p.setAttribute('contenteditable', '');
    parent.appendChild(p);
};

const insertSublistTime = parent => {
    const p = document.createElement('p');
    p.classList.add('sublist', 'sublist-time');
    p.setAttribute('contenteditable', '');
    parent.appendChild(p);
};

const insertSublistDuration = parent => {
    const p = document.createElement('p');
    p.classList.add('sublist', 'sublist-duration');
    p.setAttribute('contenteditable', '');
    parent.appendChild(p);
};

const insertPrioritySelection = parent => {
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');

    option1.setAttribute('value', 'default');
    option1.innerText = '--Prio Level--';

    option2.setAttribute('value', 'low');
    option2.innerText = 'Low';

    option3.setAttribute('value', 'medium');
    option3.innerText = 'Medium';

    option4.setAttribute('value', 'high');
    option4.innerText = 'High';

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    parent.appendChild(select);
}

const insertDelBtn = parent => {
    const btn = document.createElement('button');
    btn.innerHTML = '&#10060;';
    btn.addEventListener('click', listDelBtnEvent);
    parent.appendChild(btn);
};

export {insertSublistWrapper};