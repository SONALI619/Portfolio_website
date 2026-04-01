/* ══ ABOUT SECTION — TAB SWITCHING ══ */
const aboutTabs     = document.querySelectorAll('.tab');
const aboutContents = document.querySelectorAll('.tab-content');

aboutTabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        // Update active tab button
        aboutTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        // Show matching panel, hide others
        const target = tab.dataset.section;
        aboutContents.forEach((panel) => {
            panel.classList.toggle('active', panel.id === target);
        });
    });
});
