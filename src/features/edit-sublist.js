const editSublistDesc = (sublist, dateSelected, i, j) => {
    const sublistDesc = sublist.childNodes[1];

    sublistDesc.addEventListener('input', e => {
        //update sublist from storage
        const domDesc = e.target.innerText;
        const listsArr = JSON.parse(localStorage.getItem(dateSelected));
        listsArr[i].sublists[j].desc = domDesc;
        localStorage.setItem(dateSelected, JSON.stringify(listsArr));
        console.log(JSON.parse(localStorage.getItem(dateSelected)));
    })
}

const updateSublistInnerTexts = (sublist, dateSelected, i, j) => {
    //get sublist desc dom element
    const sublistDesc = sublist.children[1];
    console.log(sublistDesc.innerText);

    //get sublist desc from storage
    const listsArr = JSON.parse(localStorage.getItem(dateSelected))
    console.log(listsArr[i].sublists[j]);

    //update dom innertext with values from storage
    sublistDesc.innerText = listsArr[i].sublists[j].desc;
}

const forAddSublistBtn = (listsWrapper, listChildNodes, dateSelected, parentList) => {
    for (let i = 0; i < listChildNodes.length; i++) {
        if (listChildNodes[i].classList.contains('sublist-wrapper')) {
            const sublist = listChildNodes[i];
            const sublistDesc = sublist.childNodes[1];
            
            sublistDesc.addEventListener('input', e => {
                forAddSublistBtnListener(i, e, listsWrapper, dateSelected, parentList)
            });
        }
    }
}

// !!!! for add-sublist.js *** !!!
const updateStorage = (i, e, listsWrapper, dateSelected, parentList) => {
    const listsArr = JSON.parse(localStorage.getItem(dateSelected));
    const listIndex = listsWrapper.indexOf(parentList);
    const sublistIndex = i-1;
    listsArr[listIndex].sublists[sublistIndex].desc = e.target.innerText;
    localStorage.setItem(dateSelected, JSON.stringify(listsArr));
    console.log(JSON.parse(localStorage.getItem(dateSelected)));
}

export {editSublistDesc, updateSublistInnerTexts, updateStorage };