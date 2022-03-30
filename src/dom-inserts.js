import calendarIcon from './images/calendar.svg';
import addIcon from './images/add.svg';

const insertStructure = () => {
    const body = document.querySelector('body');
    const content = document.createElement('div');
    const header = document.createElement('header');
    const headerH2 = document.createElement('h2');
    const headerH1 = document.createElement('h1');
    const headerBtnWrapper = document.createElement('div');
    const headerCalendar = new Image();
    const headerAddSectionBtn = new Image();
    const line = document.createElement('div');
    const main = document.createElement('main');

    headerH2.innerText = 'Lista';
    headerH1.innerText = 'Today';

    headerCalendar.src = calendarIcon;

    headerAddSectionBtn.src = addIcon;

    line.classList.add('line');

    content.classList.add('content');

    header.appendChild(headerH2);
    header.appendChild(headerH1);
    header.appendChild(headerBtnWrapper);

    headerBtnWrapper.appendChild(headerCalendar);
    headerBtnWrapper.appendChild(headerAddSectionBtn);

    content.appendChild(header);
    content.appendChild(line);
    content.appendChild(main);

    body.appendChild(content);
    return {main, headerAddSectionBtn, headerCalendar};
}

const addSection = main => {
    const section = document.createElement('ul');
    const sectionList = document.createElement('li');
    const sectionHeader = document.createElement('div');
    const sectionHeaderTitle = document.createElement('h2');
    const sectionHeaderAddBtn = document.createElement('img');
    const sectionHeaderTime = document.createElement('h2');
    const sectionHeaderDuration = document.createElement('h2');

    const sectionContent = document.createElement('ul');
    const sectionContentList = document.createElement('li');
    const sectionContentCheckBtn = document.createElement('button');
    const sectionContentDesc = document.createElement('p');
    const sectionContentTime = document.createElement('p');
    const sectionContentDuration = document.createElement('p');
    const sectionContentRemoveBtn = document.createElement('button');

    section.classList.add('section');
    sectionHeader.classList.add('section-header');
    sectionContent.classList.add('section-content');

    sectionContentCheckBtn.innerHTML = '&#10004';
    sectionContentRemoveBtn.innerHTML = '&#10060;'

    sectionHeaderTitle.innerText = 'Morning';

    sectionHeaderTime.innerText = 'Time';
    
    sectionHeaderDuration.innerText = 'Duration';

    sectionContentDesc.innerText = 'sdflk nwfoi nweofin weofn welkfnewklf newf weiodjwqio j';

    sectionContentTime.innerText = '8:00 PM';

    sectionContentDuration.innerText = '30m';

    main.appendChild(section);

    section.appendChild(sectionList);
    
    sectionList.appendChild(sectionHeader);
    
    sectionHeader.appendChild(sectionHeaderTitle);
    sectionHeader.appendChild(sectionHeaderTime);
    sectionHeader.appendChild(sectionHeaderDuration);
    
    sectionList.appendChild(sectionContent);
    sectionContent.appendChild(sectionContentList);
    sectionContentList.appendChild(sectionContentCheckBtn);
    sectionContentList.appendChild(sectionContentDesc);
    sectionContentList.appendChild(sectionContentTime);
    sectionContentList.appendChild(sectionContentDuration);
    sectionContentList.appendChild(sectionContentRemoveBtn);
}

export {insertStructure, addSection}