const onPrioSelect = e => {
    const prioIndicator = document.querySelector('.priority-indicator')
    
    if (e.target.value == 'medium') {
        checkOtherSublists(e, prioIndicator);
        e.target.style = 'background-color: var(--lightyellow);';
    }

    else if (e.target.value == 'high') {
        checkOtherSublists(e, prioIndicator);
        e.target.style = 'background-color: var(--lightred);';
    }

    else if (e.target.value == 'low') {
        checkOtherSublists(e, prioIndicator);
        e.target.style = 'background-color: var(--easygreen);';
    }

    else if (e.target.value == 'default') {
        checkOtherSublists(e, prioIndicator);
        e.target.style = 'background-color: none;';
    }
}

const checkOtherSublists = (e, indicator) => {
    const listChildren = e.path[2].children;
    scanPrioLevels(listChildren, indicator);
}

const scanPrioLevels = (listChildren,indicator) => {
    const prioLevels = [];
    for (let i = 1; i < listChildren.length; i++) {
        const prioLevel = listChildren[i].children[4].value;
        prioLevels.push(prioLevel);
    }
    if (prioLevels.includes('high')) {
        indicator.classList.toggle('medium-priority-indicator', false);
        indicator.classList.add('high-priority-indicator');
        indicator.style = 'display: flex;';
    }
    else if (prioLevels.includes('medium') && !prioLevels.includes('high')) {
        indicator.classList.toggle('high-priority-indicator', false);
        indicator.classList.add('medium-priority-indicator');
        indicator.style = 'display: flex;';
    }
    else if (!(prioLevels.includes('medium') && prioLevels.includes('high'))) {
        indicator.classList.toggle('high-priority-indicator', false);
        indicator.classList.toggle('medium-priority-indicator', false);
        indicator.style = 'display: none;';
    }
}

export {onPrioSelect, scanPrioLevels};