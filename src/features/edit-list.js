import { insertList } from "../dom/main/1-lists-wrapper/10-list";
import { insertSublistWrapper } from '../dom/main/1-lists-wrapper/12-sublist.js';
import { 
    editSublistDesc, 
    updateSublistDescInnerTexts, 
    editSublistTime,
    updateSublistTimeInnerTexts,
    editSublistDuration,
    updateSublistDurationInnerTexts,
    updateSublistPrioValues, 
    updatePrioIndicator } from "./edit-sublist";
import { updateCheckedStatus } from "./list-checkmark";
import { updateSublistCheckedStatus } from "./sublist-checkmark";

const setListTitles = (listsArr, dateSelected) => {
    for (let i = 0; i < listsArr.length; i++) {
        const listsWrapper = document.querySelector('.lists-wrapper');
        insertList(listsWrapper);
        const currentList = listsArr[i];
        const listsDom = document.querySelectorAll('.list');
        const listDom = listsDom[i];
        const listTitle = listDom.children[0].children[1];
        listTitle.innerText = currentList.title;
        
        if (currentList.hasOwnProperty('sublists')) {
            for (let j = 0; j < currentList.sublists.length; j++) {
                // get sublist
                insertSublistWrapper(listDom);
                const sublist = listDom.childNodes[j+1];

                // add event listener for each sublist

                editSublistDesc(sublist, dateSelected, i, j);
                editSublistTime(sublist, dateSelected, i, j);

                editSublistDuration(sublist, dateSelected, i, j);

                updateSublistCheckedStatus(sublist, dateSelected, i, j);
                updateSublistDescInnerTexts(sublist, dateSelected, i, j);
                updateSublistTimeInnerTexts(sublist, dateSelected, i, j);

                updateSublistDurationInnerTexts(sublist, dateSelected, i, j);

                updateSublistPrioValues(sublist, dateSelected, i, j);
            }
        }
        updateCheckedStatus(currentList, listDom, listsArr, listsDom, dateSelected);
        updatePrioIndicator(listDom);

        listTitle.addEventListener('input', e => {updateStorage(i, dateSelected, e)});
    }
}

const updateStorage = (i, dateSelected, e) => {
    const listsArr = JSON.parse(localStorage.getItem(dateSelected));
    listsArr[i].title = e.target.innerText;
    localStorage.setItem(dateSelected, JSON.stringify(listsArr));
    
}

export {setListTitles, updateStorage}

//console.log(JSON.parse(localStorage.getItem(dateSelected)));