const listCheckmarkEvent = e => {
    const checkmark = e.target;
    const listTitle = e.path[1].children[1];
    const list = e.path[2].children
    domListChange(checkmark, listTitle);
    domListChangesSublist(list);
};

const domListChange = (checkmark, listTitle) => {
    checkmark.classList.toggle('list-checkmark-checked');
    listTitle.classList.toggle('list-title-checked');
}

const domListChangesSublist = list => {
    const listHeader = list[0];
    const listHeaderChecked = listHeader.children[0].classList.contains('list-checkmark-checked');
    const sublistArray = [];
    
    for (let i = 1; i < list.length; i++) {sublistArray.push(list[i]);};

    if (listHeaderChecked) {
        sublistArray.forEach(sublist => {
            const checkmark = sublist.children[0];
            const checkmarkChecked = checkmark.classList.contains('sublist-checkmark-checked');
            !checkmarkChecked ? toggleSublist(sublist) : 0;
        });
    }

    else if (!listHeaderChecked) {
        sublistArray.forEach(sublist => {
            const checkmark = sublist.children[0];
            const checkmarkChecked = checkmark.classList.contains('sublist-checkmark-checked');
            checkmarkChecked ? toggleSublist(sublist) : 0;
        });
    };
}

const toggleSublist = sublist => {
    if (sublist.classList.contains('sublist-wrapper')) {

        const checkmark = sublist.children[0];
        const desc = sublist.children[1];
        const time = sublist.children[2];
        const duration = sublist.children[3];
        const prio = sublist.children[4];
        checkmark.classList.toggle('sublist-checkmark-checked');
        desc.classList.toggle('sublist-desc-checked');
        time.classList.toggle('sublist-time-checked');
        duration.classList.toggle('sublist-duration-checked');
        prio.classList.toggle('select-checked');
    }
}

export {listCheckmarkEvent};