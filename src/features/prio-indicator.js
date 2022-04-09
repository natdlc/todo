const onPrioSelect = e => {
    const prioIndicator = e.path[2].childNodes[0].childNodes[3];
    const listNodes = e.path[2].childNodes;
    const listPriorities = [];
    for (let i = 0; i < listNodes.length; i++) {
        const node = listNodes[i];
        if (node.classList.contains('sublist-wrapper')) {
            const prioElement = node.childNodes[4];
            const prioValue = prioElement.value;
            updatePrioLevelDom(prioValue, prioElement);
            listPriorities.push(prioValue);
        }
    }
    updateStorage(e);
    updatePrioIndicatorDom(listPriorities, prioIndicator);
}

const updateStorage = (e) => {
    const dateSelected = document.querySelector('input[type=date]').value;

    const listsNode = e.path[3].childNodes;

    const currentListDom = e.path[2];
    const currentListDomIndex = Array.from(listsNode).indexOf(currentListDom);

    const listsArrayStorage = JSON.parse(localStorage.getItem(dateSelected));
    const listsArrayStorageList = listsArrayStorage[currentListDomIndex];

    const sublistCollection = currentListDom.childNodes;
    const sublist = e.path[1];
    const sublistIndex = (Array.from(sublistCollection).indexOf(sublist)) - 1;

    listsArrayStorageList.sublists[sublistIndex].prio = e.target.value;

    localStorage.setItem(dateSelected, JSON.stringify(listsArrayStorage));
};

const updatePrioIndicatorDom = (listPriorities, prioIndicator) => {
    if (listPriorities.includes('high')) {
        prioIndicator.style = 'display: flex;';
        prioIndicator.classList.remove('medium-priority-indicator');
        prioIndicator.classList.add('high-priority-indicator');
    }

    else if (!(listPriorities.includes('high')) && listPriorities.includes('medium')) {
        prioIndicator.style = 'display: flex;';
        prioIndicator.classList.remove('high-priority-indicator');
        prioIndicator.classList.add('medium-priority-indicator');
    }

    else if (!(listPriorities.includes('high') && listPriorities.includes('medium'))) {
        prioIndicator.style = 'display: none;';
        prioIndicator.classList.remove('medium-priority-indicator');
        prioIndicator.classList.remove('high-priority-indicator');
    }
}

const updatePrioLevelDom = (prioValue, prioElement) => {
    if (prioValue == 'low') {prioElement.style = 'background-color: var(--easygreen);';}
    else if (prioValue == 'medium') {prioElement.style = 'background-color: var(--lightyellow);';}
    else if (prioValue == 'high') {prioElement.style = 'background-color: var(--lightred);';}
    else {prioElement.style = 'background-color: none;';}
}

export {onPrioSelect, updatePrioIndicatorDom, updatePrioLevelDom};