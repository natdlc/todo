const insertListsWrapper = parent => {
    const listsWrapper = document.createElement('div');
    listsWrapper.classList.add('lists-wrapper');
    parent.appendChild(listsWrapper);
};

export {insertListsWrapper};