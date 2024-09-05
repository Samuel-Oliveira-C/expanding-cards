"use strict";
const panelElements = document.querySelectorAll('.panel');
const removeActiveClass = () => {
    panelElements.forEach((panel) => {
        panel.classList.remove('div-Active');
    });
};
const setActivePanel = (panel) => {
    removeActiveClass();
    panel.classList.add('div-Active');
};
panelElements.forEach((panel) => {
    panel.addEventListener('click', () => setActivePanel(panel));
});
