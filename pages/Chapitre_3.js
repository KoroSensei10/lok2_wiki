window.init(content).then(() => {
    window.initInventory([]);
    window.lockByItem(
        content,
        'purpleForest',
        'La forêt violette du chemin secret de la fôret pourra peut-être vous aider...',
        'Déposer ici'
    );
});
