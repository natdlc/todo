import {insertHeader, insertMain} from './dom/dom.js';
import {addList} from './features/add-list-btn.js';
import {addSublist} from './features/add-sublist-btn.js';
import './styles/0-reset.css';
import './styles/0-style.css';
import './styles/header/header.css';
import './styles/main/0-main.css';
import './styles/main/1-sidebar.css';
import './styles/main/2-lists.css';

(function (){
    insertHeader();
    insertMain();
    addList();
})();

/*
TO DO (ironic)
    ui
        deleting list in DOM
            create button for deleting List in DOM
        deleting sublist in DOM
        toggle checkmark for sublist
        toggle checkmark for list
        toggle list checkmark complete if all sublist checked
*/

class List {
    constructor(title) {
        this.title = title;
        this.checked = false;
    };

    sublists = []

    addSublist (desc, time, duration) {
        const sublist = new Sublist(desc, time, duration);
        this.sublists.push(sublist);
    };
};

class Sublist {
    constructor(desc, time, duration) {
        this.desc = desc;
        this.time = time;
        this.duration = duration;
        this.checked = false;
    };
};