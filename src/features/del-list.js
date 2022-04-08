const listDelBtnEvent = e => {
    // get clicked list element
    const clickedList = e.path[2];

    // get list wrapper nodelist
    const listNodeList = document.querySelector('.lists-wrapper').childNodes;

    // make an array from nodelist
    const listNodeListArray = Array.from(listNodeList);

    // get date selected
    const dateSelected = document.querySelector('input[type=date]').value;

    // get index of clicked list from nodelist array
    const listDomIndex = listNodeListArray.indexOf(clickedList);

    // get local storage list array (converted)
    const storageListArray = JSON.parse(localStorage.getItem(dateSelected));

    // splice list from local storage list array
    storageListArray.splice(listDomIndex, 1);

    // set local storage list array with new spliced list array
    localStorage.setItem(dateSelected, JSON.stringify(storageListArray));

    // remove clicked list from dom
    clickedList.remove();
};

export {listDelBtnEvent};