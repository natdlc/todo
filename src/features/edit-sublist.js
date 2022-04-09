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

export {editSublistDesc};