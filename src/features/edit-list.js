import { insertList } from "../dom/main/1-lists-wrapper/10-list";

const setListTitles = (listsArr, dateSelected) => {
    for (let i = 0; i < listsArr.length; i++) {
        const listsWrapper = document.querySelector('.lists-wrapper');

        insertList(listsWrapper);

        const listsArray = JSON.parse(localStorage.getItem(dateSelected));
        
        const currentList = listsArray[i];

        const listsDom = document.querySelectorAll('.list');
        const listDom = listsDom[i];
        
        const listTitle = listDom.children[0].children[1];
        
        listTitle.innerText = currentList.title;

        listTitle.addEventListener('input', e => {updateStorage(i, dateSelected, e)});
    }
}

const updateStorage = (i, dateSelected, e) => {
    const listsArray = JSON.parse(localStorage.getItem(dateSelected));
    listsArray[i].title = e.target.innerText;
    localStorage.setItem(dateSelected, JSON.stringify(listsArray));
    console.log(localStorage);
}

export {setListTitles, updateStorage}