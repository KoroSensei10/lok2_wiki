let items = [
    { name: 'mouton', type: 'draggable', selector: 'img[src*="famille_2.png"]' },
    {
        name: 'famille-empire',
        type: 'draggable',
        selector: '#famille-empire',
    }
    // {
    //     name: 'rick',
    //     type: 'droppable',
    //     selector: '#origine-et-histoire',
    //     action: () => {
    //         if (window.draggedItem !== 'autel') {
    //             return;
    //         }
    //         window.location.replace(
    //             'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    //         );
    //     },
    // },
];

window.init().then(() => {
    window.initInteractableItems(items);
    window.initInventory(items);
});
