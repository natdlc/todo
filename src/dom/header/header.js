import { onDateChange } from "../../features/date-input";

const insertHeader = () => {
    const header = document.createElement('header');
    insertTitle(header);
    insertDate(header);
    document.body.appendChild(header);
};

const insertTitle = parent => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Daily Planner';
    parent.appendChild(title);
};

const insertDate = parent => {
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.addEventListener('change', onDateChange)
    parent.appendChild(date);
};

export {insertHeader};