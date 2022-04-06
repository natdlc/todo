import {insertHeader, insertMain} from './dom/dom.js';
import {addList} from './features/add-list.js';
import './styles/0-reset.css';
import './styles/0-style.css';
import './styles/header/header.css';
import './styles/main/0-main.css';
import './styles/main/1-sidebar.css';
import './styles/main/2-lists.css';
import './styles/main/3-lists-checked.css';

(function (){
    insertHeader();
    insertMain();
    addList();
})();

/*
TO DO
    ui / ux
        display random motivation quotes
    
    backend
        study local storage **
        implement class logic with local storage
        connect class logic with dom

FEATURES
    Add/Del List
        DOM (complete)
        local
    
    Add/Del Sublist
        DOM (complete)
        local
    
    List Checkmark
        DOM (complete)
        local

    Sublist Checkmark
        DOM (complete)
        local

    Editable list fields
        DOM (complete)
        local

    List priority indicator
        DOM (complete)
        local

    Sublist priority indicator
        DOM 
            add default option "Priority Level" (complete)
            display correct list prio indicator when medium / high is set on sublist (complete)
            scan prio levels when a sublist is deleted and update indicator accordingly (complete)
            update select element bg color according to option value (complete)
            when checkmark is checked, add linethrough and bg color easygreen priority (complete)
        local

    Expandable/collapsible lists map in sidebar
        DOM
        local

    Save lists as a template
        DOM
        local

    Contain lists according to dates
        DOM
        local

*/

//create classes for list and sublist

class List {
    constructor (title) {
        this.checked = false;
        this.title = title;
        this.hasPriority = false;
    }
}

class Sublist {
    constructor (title, time, duration, prio) {
        this.checked = false;
        this.title = title;
        this.time = time;
        this.duration = duration;
        this.prio = prio;
    }
}

//get value of dates
(() => {
    const dateInp = document.querySelector('input[type="date"]');
    console.dir(dateInp);
})();