const sublistDelBtnEvent = e => {
    console.log(e);

    //get sublist's parent's nodelist converted to array
    const listDomChildrenArr = Array.from(e.path[2].childNodes);
    console.log(listDomChildrenArr);

    //get sublist's index from array nodelist parent
    const clickedSublist = e.path[1];
    const sublistIndex = listDomChildrenArr.indexOf(clickedSublist);
    console.log(sublistIndex);

    //get local storage
    const dateSelected = document.querySelector('input[type=date]').value;
    const storageListArray = JSON.parse(localStorage.getItem(dateSelected));
    console.log(storageListArray);

    //get sublist's parent list index
    const listWrapperArrayDom = Array.from(e.path[3].childNodes);
    const listIndex = listWrapperArrayDom.indexOf(e.path[2]);

    //get sublist's parent list dom element and storage
    const listDom = listWrapperArrayDom[listIndex];
    const listStorage = storageListArray[listIndex];
    console.log(listDom);
    console.log(listStorage);

    //remove from storage (INCOMPLETE)
    console.log(listStorage.sublists);
};

export {sublistDelBtnEvent};