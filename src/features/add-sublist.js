import {insertSublistWrapper} from '../dom/main/1-lists-wrapper/12-sublist.js';

const addSublistBtnEvent = e => {
    const parentList = e.path[2];
    insertSublistWrapper(parentList);
};

export {addSublistBtnEvent};