import { setListTitles } from "./edit-list";

const onDateChange = e => {
    const dateSelected = e.target.value;
    removeCurrentLists();
    if (!localStorage.getItem(dateSelected)) {
        const listsArray = [];
        localStorage.setItem(dateSelected, JSON.stringify(listsArray));
    }
    const listsArr = JSON.parse(localStorage.getItem(dateSelected));
    setListTitles(listsArr, dateSelected);
    //get sublist desc value from storage and display it inside respective lists
}

const removeCurrentLists = () => {
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => list.remove());
}

export {onDateChange};