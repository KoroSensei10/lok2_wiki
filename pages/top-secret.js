window.init().then((contents) => {
    window.initInventory();
    window.lockByItem(contents, 'mouton', 'La famille Empire');
});