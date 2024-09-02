"use strict";
const panelElements = document.querySelectorAll('.panel');
const initialActivePanel = document.querySelector('.div-Active');
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
if (initialActivePanel) {
    setActivePanel(initialActivePanel);
}
