import {insertSublistWrapper} from '../dom/main/1-lists-wrapper/12-sublist.js';
import {toggleListHeader} from '../features/sublist-checkmark.js';

const addSublistBtnEvent = e => {
    const parentList = e.path[2];
    const listHeader = e.path[1];
    const listHeaderCheckmark = e.path[1].children[0];
    const listHeaderChecked = listHeaderCheckmark.classList.contains('list-checkmark-checked');
    
    if (listHeaderChecked) {
        toggleListHeader(listHeader);
    }

    insertSublistWrapper(parentList);
};

export {addSublistBtnEvent};