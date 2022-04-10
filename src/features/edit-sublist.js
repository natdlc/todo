import { 
    updatePrioIndicatorDom,
    updatePrioLevelDom } from "./prio-indicator";
const editSublistDesc = (sublist, dateSelected, i, j) => {
    const sublistDesc = sublist.childNodes[1];

    sublistDesc.addEventListener('input', e => {
        const domDesc = e.target.innerText;
        const listsArr = JSON.parse(localStorage.getItem(dateSelected));
        listsArr[i].sublists[j].desc = domDesc;
        localStorage.setItem(dateSelected, JSON.stringify(listsArr));
    })
}

const updateSublistInnerTexts = (sublist, dateSelected, i, j) => {
    const sublistDesc = sublist.children[1];
    const listsArr = JSON.parse(localStorage.getItem(dateSelected))
    sublistDesc.innerText = listsArr[i].sublists[j].desc;
}

const updateSublistPrioValues = (sublist, dateSelected, i, j) => {
    const sublistPrio = sublist.children[4];
    const listsArr = JSON.parse(localStorage.getItem(dateSelected))
    if (listsArr[i].sublists[j].prio == '') {
        sublistPrio.value = 'default';
        return;
    }
    sublistPrio.value = listsArr[i].sublists[j].prio;
}

const updatePrioIndicator = (listDom) => {
    const prioIndicator = listDom.childNodes[0].childNodes[3];
    const listPriorities = [];
    const listDomNodes = listDom.childNodes;
    listDomNodes.forEach(node => {
        if (node.classList.contains('sublist-wrapper')) {
            const sublist = node;
            const prioElement = sublist.childNodes[4];
            const prioValue = prioElement.value;
            listPriorities.push(prioValue);
            updatePrioLevelDom(prioValue, prioElement);
        }
        updatePrioIndicatorDom(listPriorities, prioIndicator);
    })
}

// !!!! for add-sublist.js *** !!!
const updateStorage = (listsWrapper, listChildNodes, dateSelected, parentList) => {
    for (let i = 0; i < listChildNodes.length; i++) {
        if (listChildNodes[i].classList.contains('sublist-wrapper')) {
            const sublist = listChildNodes[i];
            const sublistDesc = sublist.childNodes[1];
            sublistDesc.addEventListener('input', e => {
                updateStorageEvent(i, e, listsWrapper, dateSelected, parentList)
            });
        }
    }
}
// !!!! for add-sublist.js *** !!!
const updateStorageEvent = (i, e, listsWrapper, dateSelected, parentList) => {
    const listsArr = JSON.parse(localStorage.getItem(dateSelected));
    const listIndex = listsWrapper.indexOf(parentList);
    const sublistIndex = i-1;
    listsArr[listIndex].sublists[sublistIndex].desc = e.target.innerText;
    localStorage.setItem(dateSelected, JSON.stringify(listsArr));
}



export {
    editSublistDesc, 
    updateSublistInnerTexts, 
    updateStorage, 
    updateSublistPrioValues,
    updatePrioIndicator };