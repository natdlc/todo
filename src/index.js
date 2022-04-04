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

    Save lists as a template
        DOM
        local

    Contain lists according to dates
        DOM
        local

*/

class List {
    constructor(title, checked) {
        this.title = title;
        this.hasPriority = false;
        this.priority;
        this.checked = checked;
    };

    sublists = [];

    addSublist (desc, time, duration, priority) {
        const sublist = new Sublist(desc, time, duration, priority);
        if (priority === 'high') this.hasHighPriority = true;
        this.sublists.push(sublist);
    };
};

class Sublist {
    constructor(desc, time, duration, priority) {
        this.desc = desc;
        this.time = time;
        this.duration = duration;
        this.priority = priority
        this.checked = false;
    };

    setPriority (newPriority) {
        this.priority = newPriority;
    }
};

// let list1 = new List('read', 'false', 'low');
// list1.addSublist('jp', '3pm', '30 minutes', 'low');
// list1.addSublist('test', '5', '10m', 'high');
// list1.sublists.forEach(sublist => {
//     console.log(sublist.priority);
// })
// console.log(list1);