const sublistCheckmarkEvent = e => {
    const checkmark = e.target;
    const sublistDesc = e.path[1].children[1];
    const sublistTime = e.path[1].children[2];
    const sublistDuration = e.path[1].children[3]
    domSublistChange(checkmark, sublistDesc, sublistTime, sublistDuration);
    domSublistChangesList(e);
};

const domSublistChange = (checkmark,desc,time,duration) => {
    checkmark.classList.toggle('sublist-checkmark-checked');
    desc.classList.toggle('sublist-desc-checked');
    time.classList.toggle('sublist-time-checked');
    duration.classList.toggle('sublist-duration-checked');
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

    if (checkmarkChecked && descChecked && timeChecked && durationChecked) return true;
}


export {sublistCheckmarkEvent, toggleListHeader};