/* eslint-disable */

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e){
    tabPanels.forEach(panel => (panel.hidden = true));
    tabButtons.forEach(button => (button.ariaSelected = "false"));
    e.currentTarget.ariaSelected = "true";
    const { id } = e.currentTarget;
    const selectedPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
    selectedPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));