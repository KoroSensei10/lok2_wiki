let items = [
    { name: 'autel', type: 'draggable', selector: '#autel-suprême' },
    {
        name: 'rick',
        type: 'droppable',
        selector: '#origine-et-histoire',
        action: () => {
            if (window.draggedItem !== 'autel') {
                return;
            }
            window.location.replace(
                'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            );
            console.log('snoup');
        },
    },
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
