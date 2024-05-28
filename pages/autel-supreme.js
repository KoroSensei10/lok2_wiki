let items = [
    { name: 'autel', type: 'draggable', selector: '#autel-suprême' },
    {
        name: 'rick',
        type: 'droppable',
        selector: '#origine-et-histoire',
        action: () => {
            if (window.draggedItem !== 'clef-etoile') {
                return;
            }
            window.location.replace(
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            );
        },
    },
    {
        name: 'autel-image',
        type: 'droppable',
        selector: 'img[src="/autel.png"]',
        action: () => {
            if (window.draggedItem !== 'clef-etoile') {
                return;
            }
            window.alert('Le mot de passe est : "Rick Astley"');
        },
    }
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
