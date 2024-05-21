window.init().then((contents) => {
    window.lockByItem(contents, 'mouton', 'La famille Empire', 'Déposer là');
    window.initInventory();
});