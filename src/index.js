import {insertHeader, insertMain} from './dom/dom.js';
import './styles/0-reset.css';
import './styles/0-style.css';
import './styles/header/header.css';
import './styles/main/0-main.css';
import './styles/main/1-sidebar.css';
import './styles/main/2-lists.css';

(function (){
    insertHeader();
    insertMain();
})();

//create mock logic through class

/*



*/

class List {
    constructor(title) {
        this.title = title;
        this.checked = false;
    };

    sublists = []

    createSublist (desc, time, duration) {
        const sublist = new Sublist(desc, time, duration);
        this.sublists.push(sublist);
    }
}

class Sublist {
    constructor(desc, time, duration) {
        this.desc = desc;
        this.time = time;
        this.duration = duration;
        this.checked = false;
    }
}

const list1 = new List('Morning');
list1.createSublist('toothbrush', '8PM', '2m');
console.log(list1);