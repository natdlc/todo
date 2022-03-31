import calendar from '....';

const insertSideBar = parent => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    insertTodayWrapper(sidebar);
    insertTomWrapper(sidebar);
    insertAddListBtn(sidebar);
    parent.appendChild(sidebar);
};

const insertTodayWrapper = parent => {
    const todayWrapper = document.createElement('div');
    todayWrapper.classList.add('today-wrapper', 'sidebar-wrappers');
    insertTodayIcon(todayWrapper);
    insertTodayText(todayWrapper);
    parent.appendChild(todayWrapper);
};

const insertTodayIcon = parent => {
    const img = new Image();
    img.src = calendar;
    parent.appendChild(img);
};

const insertTodayText = parent => {
    const h2 = document.createElement('h2');
    h2.innerText = 'Today';
    parent.appendChild(h2);
};

const insertTomWrapper = parent => {
    const tomWrapper = document.createElement('div');
    tomWrapper.classList.add('tom-wrapper', 'sidebar-wrappers');
    insertTomorrowIcon(tomWrapper);
    insertTomorrowText(tomWrapper);
    parent.appendChild(tomWrapper);
};

const insertTomorrowIcon = parent => {
    const img = new Image();
    img.src = calendar;
    parent.appendChild(img); 
};

const insertTomorrowText = parent => {
    const h2 = document.createElement('h2');
    h2.innerText = 'Tomorrow';
    parent.appendChild(h2);
};

const insertAddListBtn = parent => {
    const btn = document.createElement('button');
    btn.classList.add('add-list-btn');
    btn.innerText = '+';
    parent.appendChild(btn);
};

export {insertSideBar};