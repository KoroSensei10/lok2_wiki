let items = [
    { name: 'clef-etoile', type: 'draggable', selector: 'img[src="/cle_en_forme_detoile.png"]'},
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
