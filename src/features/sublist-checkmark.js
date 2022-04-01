const sublistCheckmarkEvent = e => {
    const checkmark = e.target;
    const sublistDesc = e.path[1].children[1];
    const sublistTime = e.path[1].children[2];
    const sublistDuration = e.path[1].children[3]
    domChange(checkmark, sublistDesc, sublistTime, sublistDuration);
    domChangeList(e);
};

const domChange = (checkmark, desc,time,duration) => {
    checkmark.classList.toggle('sublist-checkmark-checked');
    desc.classList.toggle('sublist-desc-checked');
    time.classList.toggle('sublist-time-checked');
    duration.classList.toggle('sublist-duration-checked');
};

const domChangeList = (e) => {
    const listBox = e.target.parentNode.parentNode.children;
    const listHeader = listBox[0];
    const numOfSublists = listBox.length-1;
    const numOfCheckedSublists = countCheckedSublists(listBox);
    if (numOfCheckedSublists == numOfSublists) toggleListHeader(listHeader);
    // if list header is checked
        // if one of the sublists is unchecked
            // uncheck list header
}

const toggleListHeader = listHeader => {
    const checkmark = listHeader.children[0];
    const title = listHeader.children[1];
    checkmark.classList.toggle('list-checkmark-checked');
    title.classList.toggle('list-title-checked');
}

const countCheckedSublists = listBox => {
    let counter = 0;
    for (let i = 0; i < listBox.length; i++) {
        const listBoxChild = listBox[i];
        if (listBoxChild.classList.contains('sublist-wrapper')) {
            const sublist = listBoxChild;
            if (isChecked(sublist)) {
                counter++;
            }
        }
    }
    return counter;
}

const isChecked = sublist => {
    const checkmark = sublist.children[0];
    const desc = sublist.children[1];
    const time = sublist.children[2];
    const duration = sublist.children[3];

    if (checkmark.classList.contains('sublist-checkmark-checked')
    && desc.classList.contains('sublist-desc-checked')
    && time.classList.contains('sublist-time-checked')
    && duration.classList.contains('sublist-duration-checked')) {
        return true;
    }
}


export {sublistCheckmarkEvent};