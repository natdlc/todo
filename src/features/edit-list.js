import { insertList } from "../dom/main/1-lists-wrapper/10-list";
import {insertSublistWrapper} from '../dom/main/1-lists-wrapper/12-sublist.js';

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
                insertSublistWrapper(listDom);
            }
        }

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