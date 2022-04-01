const listCheckmarkEvent = e => {
    const checkmark = e.target;
    const listTitle = e.path[1].children[1];
    const list = e.path[2].children
    domChangeList(checkmark, listTitle);
    domChangeSublist(list);
};

const domChangeList = (checkmark, listTitle) => {
    checkmark.classList.toggle('list-checkmark-checked');
    listTitle.classList.toggle('list-title-checked');
}

const domChangeSublist = list => {
    const listHeader = list[0];
    const listHeaderChecked = listHeader.children[0].classList.contains('list-checkmark-checked');
    if (listHeaderChecked) {
        for(let i = 0; i < list.length; i++) {
            const sublist = list[i];
            update(sublist);
        }
    }

    else if (!listHeaderChecked) {
        for(let i = 0; i < list.length; i++) {
            const sublist = list[i];
            update(sublist);
        }
    }

    // if list checkmark is unchecked
        // if some sublists are unchecked
            // check only those sublists
        // if all sublists are unchecked
            // check all sublists

    // if list checkmark is checked
        // uncheck all sublists
    
}

const update = (sublist) => {
    if (sublist.classList.contains('sublist-wrapper')) {

        const checkmark = sublist.children[0];
        const desc = sublist.children[1];
        const time = sublist.children[2];
        const duration = sublist.children[3];

        checkmark.classList.toggle('sublist-checkmark-checked');
        desc.classList.toggle('sublist-desc-checked');
        time.classList.toggle('sublist-time-checked');
        duration.classList.toggle('sublist-duration-checked');
    }
}

export {listCheckmarkEvent};