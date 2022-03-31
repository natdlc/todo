const sublistCheckmarkEvent = e => {
    const checkmark = e.target;
    const sublistDesc = e.path[1].children[1];
    const sublistTime = e.path[1].children[2];
    const sublistDuration = e.path[1].children[3]

    domChange(checkmark, sublistDesc, sublistTime, sublistDuration);

};

const domChange = (checkmark, desc,time,duration) => {
    checkmark.classList.toggle('sublist-checkmark-checked');
    desc.classList.toggle('sublist-desc-checked');
    time.classList.toggle('sublist-time-checked');
    duration.classList.toggle('sublist-duration-checked');
}

export {sublistCheckmarkEvent};