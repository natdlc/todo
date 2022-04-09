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

const addSublistBtnEvent = e => {
    const parentList = e.path[2];
    const listHeader = e.path[1];
    const listHeaderCheckmark = e.path[1].children[0];
    const listHeaderChecked = listHeaderCheckmark.classList.contains('list-checkmark-checked');
    const dateSelected = document.querySelector('input[type=date]').value;

    if (listHeaderChecked) {toggleListHeader(listHeader);}
    insertSublistWrapper(parentList);
    addToStorage(e, parentList);

    const listsWrapper = Array.from(parentList.parentElement.childNodes);

    //edit sublist desc functionality
    const listChildNodes = parentList.childNodes;
    console.log(listChildNodes);
    for (let i = 0; i < listChildNodes.length; i++) {
        if (listChildNodes[i].classList.contains('sublist-wrapper')) {
            const sublist = listChildNodes[i];
            const sublistDesc = sublist.childNodes[1];
            
            sublistDesc.addEventListener('input', e => {
                const listsArr = JSON.parse(localStorage.getItem(dateSelected));
                const listIndex = listsWrapper.indexOf(parentList);
                const sublistIndex = i-1;
                listsArr[listIndex].sublists[sublistIndex].desc = e.target.innerText;
                localStorage.setItem(dateSelected, JSON.stringify(listsArr));
                console.log(JSON.parse(localStorage.getItem(dateSelected)));
            })
        }
    }
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