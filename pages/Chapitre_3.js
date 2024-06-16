window.init().then((contents) => {
    window.initInventory([]);
    window.lockByItem(
        contents,
        'purpleForest',
        'La forêt violette du chemin secret de la fôret pourra peut-être vous aider...',
        'Déposer ici'
    );
});
