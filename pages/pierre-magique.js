const items = [
    {
        type: 'draggable',
        name: 'pierre',
        selector: 'img[src*="pierre_magique_hr.png"]',
    },
];
window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
