import insertSideBar from './0-sidebar/sidebar.js';
import insertListsWrapper from './1-lists-wrapper/lists-wrapper.js';

const insertMain = () => {
    const main = document.createElement('main');
    insertSideBar(main);
    insertListsWrapper(main);
    document.body.appendChild(main);
};

export {insertMain};