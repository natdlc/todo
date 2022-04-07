import { insertList } from "../dom/main/1-lists-wrapper/10-list";

const onDateChange = e => {
    const dateSelected = e.target.value;
    //remove display from previous date
    removeCurrentLists();
    //if storage doesnt have a value for the date yet
        //set date selected as key and initialize 
    if (!localStorage.getItem(dateSelected)) {
        const listsArray = [];
        localStorage.setItem(dateSelected, JSON.stringify(listsArray));
        console.log('ran');
    }

    const listsArr = JSON.parse(localStorage.getItem(dateSelected));

    setListTitles(listsArr, dateSelected);
}

const setListTitles = (listsArr, dateSelected) => {
    for (let i = 0; i < listsArr.length; i++) {
        const listsWrapper = document.querySelector('.lists-wrapper');
        //insert list to dom
        insertList(listsWrapper);

        //retrieve lists container from localstorage
        const listsArray = JSON.parse(localStorage.getItem(dateSelected));
        
        //select individual list from array
        const currentList = listsArray[i];

        //select list from dom
        const listsDom = document.querySelectorAll('.list');
        const listDom = listsDom[i];
        
        //select list's title from dom
        const listTitle = listDom.children[0].children[1];
        
        //set individual list's title text to the one from localstorage
        listTitle.innerText = currentList.title;
    }
}

const removeCurrentLists = () => {
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => list.remove());
}

export {onDateChange};