let items = [
    {
        name: 'purpleForest',
        type: 'draggable',
        selector: 'img[src="/foret_labyrinthe5.png"]',
    },
];
window.init().then((contents) => {
    window.initInteractableItems(items);
    window.initInventory(items);
    window.lock(contents, '6', 'Combien de cailloux dans la foret ?');
});
