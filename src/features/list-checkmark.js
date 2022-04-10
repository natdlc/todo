const listCheckmarkEvent = e => {
    const checkmark = e.target;
    const listTitle = e.path[1].children[1];
    const listHTMLCollection = e.path[2].children;
    domListChange(checkmark, listTitle);
    domListChangesSublist(listHTMLCollection);
    updateStorage(e);
};

const updateStorage = e => {
    const dateSelected = document.querySelector('input[type=date]').value;    
    const listsArr = JSON.parse(localStorage.getItem(dateSelected));

    const listsWrapperNodes = Array.from(e.path[3].childNodes);
    const list = e.path[2];
    const listIndex = listsWrapperNodes.indexOf(list);

    const listNodes = e.path[2].childNodes;

    if (listsArr[listIndex].checked) {
        listsArr[listIndex].checked = false;
        listNodes.forEach((node, i) => {
            if (node.classList.contains('sublist-wrapper')) {
                listsArr[listIndex].sublists[i-1].checked = false;
                localStorage.setItem(dateSelected, JSON.stringify(listsArr));
            }
        })
    }
    else {
        listsArr[listIndex].checked = true;
        listNodes.forEach((node, i) => {
            if (node.classList.contains('sublist-wrapper')) {
                listsArr[listIndex].sublists[i-1].checked = true;
                localStorage.setItem(dateSelected, JSON.stringify(listsArr));
            }
        })
    };

    localStorage.setItem(dateSelected, JSON.stringify(listsArr));
}

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
            console.log('check');
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
        toggleSublistLogic(sublist);
    }
}

// for edit-list.js
const updateCheckedStatus = (currentList, listDom, listsArr, listsDom, dateSelected) => {
    const listCheckmark = listDom.childNodes[0].childNodes[0];

    
    const listTitle = listDom.childNodes[0].childNodes[1];
    const listNodes = listDom.childNodes;
    const sublistCheckedStatuses = [];

    if (currentList.sublists) {
        currentList.sublists.forEach(sublist => {
            sublistCheckedStatuses.push(sublist.checked);
        });
    }

    if (currentList.checked) {
        listCheckmark.classList.toggle('list-checkmark-checked');
        listTitle.classList.toggle('list-title-checked');
        listNodes.forEach((node, i) => {
            if (node.classList.contains('sublist-wrapper')) {
                currentList.sublists[i-1].checked = true;
                localStorage.setItem(dateSelected, JSON.stringify(listsArr));
            }
        }) 
    }
}

const toggleSublistLogic = sublist => {
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

export {listCheckmarkEvent, updateCheckedStatus};