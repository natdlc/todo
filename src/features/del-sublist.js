import { updatePrioIndicator } from "./edit-sublist";

const sublistDelBtnEvent = e => {
    const listDomChildrenArr = Array.from(e.path[2].childNodes);

    const clickedSublist = e.path[1];
    const sublistIndex = listDomChildrenArr.indexOf(clickedSublist);

    const dateSelected = document.querySelector('input[type=date]').value;
    const storageListArray = JSON.parse(localStorage.getItem(dateSelected));

    const listWrapperArrayDom = Array.from(e.path[3].childNodes);
    const listIndex = listWrapperArrayDom.indexOf(e.path[2]);

    const listDom = listWrapperArrayDom[listIndex];
    const listStorage = storageListArray[listIndex];

    listStorage.sublists.splice(sublistIndex-1, 1);
    localStorage.setItem(dateSelected, JSON.stringify(storageListArray));
    clickedSublist.remove();

    updatePrioIndicator(listDom);
};

export {sublistDelBtnEvent};