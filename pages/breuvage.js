let items = [
    { name: 'breuvage', type: 'draggable', selector: 'img[src="/breuvage.png"]'},
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
