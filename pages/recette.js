let items = [
    { name: 'recette', type: 'droppable', selector: 'h1#recette', action: () => {
        if (window.draggedItem !== 'breuvage') {
            return;
        }
        window.location.replace("https://wiki.lok2.fr/recettedubreuvage")
    },},
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
