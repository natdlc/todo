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

export {editSublistDesc, updateSublistInnerTexts };