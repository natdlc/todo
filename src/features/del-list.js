const listDelBtnEvent = e => {
    const dateSelected = document.querySelector('input[type=date]').value;
    // console.log(e);
    const title = e.path[1].children[1].innerText;
    console.log(title);
    const list = e.path[2];
    list.remove();

    const listsArray = JSON.parse(localStorage.getItem(dateSelected))
    //get target list's title value
    //use target list's title value to delete the entry from listsArray

    //update storage with new listsArray

    // console.log(listsArray);

    const matchesDomTitle = obj => obj.title == title;
    const index = listsArray.findIndex(matchesDomTitle);
    console.log(index);

    listsArray.splice(index, 1);
    console.log(listsArray);

    localStorage.setItem(dateSelected, JSON.stringify(listsArray));
};

export {listDelBtnEvent};