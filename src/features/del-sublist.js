import { scanPrioLevels } from "./prio-indicator";
const sublistDelBtnEvent = e => {
    e.path[1].remove();
    checkPrioLevels(e);
};

const checkPrioLevels = e => {
    const listChildren = e.path[2].children;
    const indicator = document.querySelector('.priority-indicator');
    scanPrioLevels(listChildren, indicator);
}

export {sublistDelBtnEvent};