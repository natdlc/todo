const listCheckmarkEvent = e => {
    const checkmarkBtn = e.target;
    const currentListTitle = e.path[1].children[1];
    checkmarkBtn.classList.toggle('list-checkmark-checked');
    currentListTitle.classList.toggle('list-title-checked');
};

export {listCheckmarkEvent};