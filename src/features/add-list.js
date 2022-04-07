import {insertList} from '../dom/main/1-lists-wrapper/10-list.js';
import {updateStorage} from './edit-list.js';
//create container for list objects
//when user clicks add list
    //create new list object
    //push new list object to container

class List {
    constructor(title) {
        this.title = title;
    }
}

const addListBtn = () => {
    const btn = document.querySelector('.add-list-btn');
    const listsWrapper = document.querySelector('.lists-wrapper');
    btn.addEventListener('click', e => {
        insertList(listsWrapper);
        addListToStorage();
        const dateSelected = document.querySelector('input[type=date]').value;
        const listHtmlCollection = e.path[2].children[1].children;
        const addedList = listHtmlCollection[listHtmlCollection.length - 1];
        const listTitle = addedList.children[0].children[1];
        listTitle.addEventListener('input', e => {
            console.log(e.target.innerText);
        })

    });
}

const addListToStorage = () => {
    const date = document.querySelector('input[type=date]');
    const newList = new List('');
    const listsArray = JSON.parse(localStorage.getItem(date.value));
    listsArray.push(newList);
    localStorage.setItem(date.value, JSON.stringify(listsArray));
    console.log(localStorage);
}

export {addListBtn};