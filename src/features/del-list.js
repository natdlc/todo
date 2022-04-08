const listDelBtnEvent = e => {
    const dateSelected = document.querySelector('input[type=date]').value;
    const title = e.path[1].children[1].innerText;
    const list = e.path[2];
    list.remove();
    const listsArray = JSON.parse(localStorage.getItem(dateSelected))
    const matchesDomTitle = obj => obj.title == title;
    const index = listsArray.findIndex(matchesDomTitle);
    listsArray.splice(index, 1);
    localStorage.setItem(dateSelected, JSON.stringify(listsArray));
};

export {listDelBtnEvent};