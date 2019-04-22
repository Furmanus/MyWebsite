import {
    CONTACT,
    HOBBY,
    HOME,
    INFO,
    PORTFOLIO,
} from './constants';
const navTypeToHandlerMap = {
    [HOME]: homeNavClickEventListener,
    [PORTFOLIO]: portfolioNavClickEventListener,
    [CONTACT]: contactNavClickEventListener,
    [INFO]: infoNavClickEventListener,
    [HOBBY]: hobbyNavClickEventListener,
};
const homePage = document.getElementById(HOME);
const portfolio = document.getElementById(PORTFOLIO);
const contact = document.getElementById(CONTACT);
const info = document.getElementById(INFO);
const hobby = document.getElementById(HOBBY);
const typeToPageMap = {
    [HOME]: homePage,
    [PORTFOLIO]: portfolio,
    [CONTACT]: contact,
    [INFO]: info,
    [HOBBY]: hobby,
};


export function attachEvents() {
    getNavElements().forEach(link => {
        const type = link.dataset.nav;

        link.addEventListener('click', navTypeToHandlerMap[type]);
    });
}
function getPagesElements() {
    return document.querySelectorAll('[data-role="page"]');
}
function getNavElements() {
    return document.querySelectorAll('[data-nav]');
}
function homeNavClickEventListener() {
    showPage(HOME);
}
function portfolioNavClickEventListener() {
    showPage(PORTFOLIO);
}
function contactNavClickEventListener() {
    showPage(CONTACT);
}
function infoNavClickEventListener() {
    showPage(INFO);
}
function hobbyNavClickEventListener() {
    showPage(HOBBY);
}
function showPage(type) {
    const page = document.getElementById(type);

    if (page) {
        page.classList.remove('hidden');

        hidePagesExceptForType(type);
    }
}
function hidePagesExceptForType(type) {
    const pages = Array.from(getPagesElements());
    const excludedTypeIndex = pages.indexOf(typeToPageMap[type]);

    if (excludedTypeIndex > -1) {
        pages.splice(excludedTypeIndex, 1);

        pages.forEach(page => {
            page.classList.add('hidden');
        });
    }
}
export function setYearInFooter() {
    const footerText = document.querySelector('footer p');
    const currentDate = new Date();

    footerText.innerText = footerText.innerText.replace('2019', currentDate.getFullYear());
}
export function initVideo() {
    const video = document.querySelector('video');

    video.oncanplay = () => {
        video.play();
    };
}