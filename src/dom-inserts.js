const createTitle = (title) => {
    const titleTag = document.createElement('h1');
    titleTag.innerText = title;
    document.body.appendChild(titleTag);
};

export {createTitle};