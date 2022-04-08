import {insertSublistWrapper} from '../dom/main/1-lists-wrapper/12-sublist.js';
import {toggleListHeader} from '../features/sublist-checkmark.js';

class Sublist {
    constructor(checked, desc, time, duration, prio) {
        this.checked = checked;
        this.desc = desc;
        this.time = time;
        this.duration = duration;
        this.prio = prio;
    }
}

//bug with add sublist:
    //after sublist is added
        //when list title is edited
            //sublist array from storage gets removed
const addSublistBtnEvent = e => {
    const parentList = e.path[2];
    const listHeader = e.path[1];
    const listHeaderCheckmark = e.path[1].children[0];
    const listHeaderChecked = listHeaderCheckmark.classList.contains('list-checkmark-checked');

    if (listHeaderChecked) {toggleListHeader(listHeader);}
    insertSublistWrapper(parentList);
    addToStorage(e, parentList);
};

const addToStorage = (e, parentList) => {
    const currentDate = document.querySelector('input[type=date]').value;
    const listsArray = JSON.parse(localStorage.getItem(currentDate));
    const node = parentList.parentNode.childNodes;
    const listIndex = Array.from(node).indexOf(parentList);
  
    if (!(listsArray[listIndex].hasOwnProperty('sublists'))) listsArray[listIndex].sublists = [];

    listsArray[listIndex].sublists.push(new Sublist(false, '', '', '', ''));
    localStorage.setItem(currentDate, JSON.stringify(listsArray));
}

export {addSublistBtnEvent};