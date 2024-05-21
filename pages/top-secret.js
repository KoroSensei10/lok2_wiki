window.init().then((contents) => {
    window.lockByItem(contents, 'familleEmpire', 'La famille Empire', 'Déposer là');
    window.initInventory();
});