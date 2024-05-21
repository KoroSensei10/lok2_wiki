let items = [
    { name: 'familleEmpire', type: 'draggable', selector: 'img[src*="famille_2.png"]' }
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
