const insertListHeader = parent => {
    const listHeader = document.createElement('div');
    listHeader.classList.add('list-header');
    insertListCheckmark(listHeader); 
    insertListTitle(listHeader);
    insertAddSublistBtn(listHeader);
    parent.appendChild(listHeader);
};

const insertListCheckmark = parent => {
    const btn = document.createElement('button');
    btn.classList.add('list-checkmark');
    btn.innerHTML = '&#10004;';
    parent.appendChild(btn);
};

const insertListTitle = parent => {
    const h1 = document.createElement('h1');
    h1.innerText = 'List Title';
    parent.appendChild(h1);
};

const insertAddSublistBtn = parent => {
    const btn = document.createElement('button');
    btn.classList.add('add-sublist-btn');
    btn.innerText = '+';
    parent.appendChild(btn);
};

export {insertListHeader};