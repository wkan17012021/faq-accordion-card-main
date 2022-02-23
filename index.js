(function () {
  "use strict";
  const accordionButtons = document.querySelectorAll(".js-accordionBtn");
  const closeAllOpenedPanel = () => {
    const accordionPanels = document.querySelectorAll(".js-accordionPanel");
    accordionPanels.forEach((panel) => {
      panel.setAttribute("hidden", "");
    });
    accordionButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  };
  const openCurrentPanel = (currentButton, currentPanel) => {
    currentPanel.removeAttribute("hidden");
    currentButton.setAttribute("aria-expanded", "true");
  };
  const closeCurrentPanel = (currentButton, currentPanel) => {
    currentPanel.setAttribute("hidden", "");
    currentButton.setAttribute("aria-expanded", "false");
  };
  const togglePanel = (event) => {
    const currentAccordionButton = event.currentTarget;
    const currentAccordionPanel =
      currentAccordionButton.parentElement.nextElementSibling;
    if (currentAccordionPanel.hasAttribute("hidden")) {
      closeAllOpenedPanel();
      openCurrentPanel(currentAccordionButton, currentAccordionPanel);
    } else {
      closeCurrentPanel(currentAccordionButton, currentAccordionPanel);
    }
  };
  accordionButtons.forEach((button) => {
    button.addEventListener("click", togglePanel);
  });
})();
