const listCheckmarkEvent = e => {
    const checkmark = e.target;
    const listTitle = e.path[1].children[1];
    domChange(checkmark, listTitle);
};

const domChange = (checkmark, listTitle) => {
    checkmark.classList.toggle('list-checkmark-checked');
    listTitle.classList.toggle('list-title-checked');
}

export {listCheckmarkEvent};