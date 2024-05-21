window.init().then((contents) => {
    window.lockByItem(contents, 'mouton', 'La famille Empire');
    window.initInventory();
});