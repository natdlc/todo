const sublistCheckmarkEvent = e => {
    const checkmark = e.target;
    const sublistDesc = e.path[1].children[1];
    const sublistTime = e.path[1].children[2];
    const sublistDuration = e.path[1].children[3];
    const prioLevel = e.path[1].children[4];
    domSublistChange(checkmark, sublistDesc, sublistTime, sublistDuration, prioLevel);
    domSublistChangesList(e);
    updateStorage(e);


};

const updateSublistCheckedStatus = (sublist, dateSelected, i, j) => {

    const checkmark = sublist.childNodes[0];
    const desc = sublist.childNodes[1];
    const time = sublist.childNodes[2];
    const duration = sublist.childNodes[3];
    const prio = sublist.childNodes[4];

    const listsArr = JSON.parse(localStorage.getItem(dateSelected));
    const checked = listsArr[i].sublists[j].checked;
    if (checked) {domSublistChange(checkmark, desc, time, duration, prio)};
};

const checkOtherSublists = (storageLists, listIndex) => {

    const checkedStatuses = [];
    storageLists[listIndex].sublists.forEach(sublist => {
        checkedStatuses.push(sublist.checked);
    });

    if (checkedStatuses.includes(false)) {
        storageLists[listIndex].checked = false;
        return storageLists;
    }

    else {
        storageLists[listIndex].checked = true;
        return storageLists;
    }
    
};

const updateStorage = e => {
    const list = e.path[2];
    const listWrapperNodes = e.path[3].childNodes;
    const listIndex = Array.from(listWrapperNodes).indexOf(list);

    const sublist = e.path[1];
    const listNodes = e.path[2].childNodes;
    const sublistIndex = Array.from(listNodes).indexOf(sublist) - 1;

    const dateSelected = document.querySelector('input[type=date]').value;
    const storageLists = JSON.parse(localStorage.getItem(dateSelected));
    const storageList = storageLists[listIndex];

    const checked = e.target.classList.contains('sublist-checkmark-checked');
    checked ? 
    storageList.sublists[sublistIndex].checked = true : 
    storageList.sublists[sublistIndex].checked = false;

    // updates list checked status from storage if other sublists are checked;
    const newStorage = checkOtherSublists(storageLists, listIndex);
    
    localStorage.setItem(dateSelected, JSON.stringify(newStorage));
};

const domSublistChange = (checkmark,desc,time,duration,prio) => {
    checkmark.classList.toggle('sublist-checkmark-checked');
    desc.classList.toggle('sublist-desc-checked');
    time.classList.toggle('sublist-time-checked');
    duration.classList.toggle('sublist-duration-checked');
    prio.classList.toggle('select-checked');
};

const domSublistChangesList = e => {
    const listBox = e.target.parentNode.parentNode.children;
    const listHeader = listBox[0];
    const listHeaderCheckmark = listBox[0].children[0];
    const sublistCheckmarkClass = e.target.classList;
    const numOfSublists = listBox.length-1;
    const numOfCheckedSublists = countCheckedSublists(listBox);
    const listHeaderChecked = listHeaderCheckmark.classList.contains('list-checkmark-checked');
    const sublistCheckmarkChecked = sublistCheckmarkClass.contains('sublist-checkmark-checked');

    if (listHeaderChecked) if (!(sublistCheckmarkChecked)) toggleListHeader(listHeader);
    if (numOfCheckedSublists == numOfSublists) toggleListHeader(listHeader);
};

const toggleListHeader = listHeader => {

    const checkmark = listHeader.children[0];
    const title = listHeader.children[1];

    checkmark.classList.toggle('list-checkmark-checked');
    title.classList.toggle('list-title-checked');
};

const countCheckedSublists = listBox => {
    let counter = 0;

    for (let i = 0; i < listBox.length; i++) {
        const isSublist = listBox[i].classList.contains('sublist-wrapper');

        if (isSublist) {
            const sublist = listBox[i];
            if (isSublistChecked(sublist)) counter++;
        }
    }

    return counter;
};

const isSublistChecked = sublist => {
    const checkmarkChecked = sublist.children[0].classList.contains('sublist-checkmark-checked');
    const descChecked = sublist.children[1].classList.contains('sublist-desc-checked');
    const timeChecked = sublist.children[2].classList.contains('sublist-time-checked');
    const durationChecked = sublist.children[3].classList.contains('sublist-duration-checked');
    const prioChecked = sublist.children[4].classList.contains('select-checked');

    if (checkmarkChecked && descChecked && timeChecked && durationChecked && prioChecked) return true;
}


export {sublistCheckmarkEvent, toggleListHeader, updateSublistCheckedStatus};