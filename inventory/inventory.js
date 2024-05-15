window.draggedItem = null;
function initInventoryContainer() {
    let inventoryContainer = document.createElement('div');
    inventoryContainer.className = 'inventory-container';

    let arrow = document.createElement('div');
    arrow.className = 'arrow';

    let button = document.createElement('button');
    button.onclick = function () {
        const container = document.querySelector('.inventory-container');
        container.classList.toggle('visible');
        const arrow = document.querySelector('.arrow button');
        arrow.textContent = container.classList.contains('visible') ? '▼' : '▲';
    };
    button.textContent = '▲';
    arrow.appendChild(button);

    let text = document.createElement('div');
    text.textContent = 'Inventaire';

    let inventory = document.createElement('div');
    inventory.className = 'inventory';

    let inventorySlot1 = document.createElement('div');
    inventorySlot1.className = 'inventory-slot';

    let inventorySlot2 = document.createElement('div');
    inventorySlot2.className = 'inventory-slot';

    inventory.appendChild(inventorySlot1);
    inventory.appendChild(inventorySlot2);

    inventoryContainer.appendChild(arrow);
    inventoryContainer.appendChild(text);
    inventoryContainer.appendChild(inventory);

    document.body.appendChild(inventoryContainer);
}
function initInteractableItems(items) {
    items.forEach((item) => {
        const element = document.querySelector(item.selector);
        if (element) {
            element.setAttribute('data-name', item.name);
            if (item.type === 'draggable') {
                element.draggable = true;
                element.addEventListener('dragstart', (event) => {
                    window.draggedItem = item.name;
                });
            } else if (item.type === 'droppable') {
                element.draggable = false;
                element.addEventListener('dragover', (event) => {
                    event.preventDefault();
                });
                element.addEventListener('drop', (event) => {
                    event.preventDefault();
                    item.action(element, event);
                    saveInventoryToLocalStorage();
                });
            }
        }
    });
}

function saveInventoryToLocalStorage() {
    let inventory = [];
    const inventorySlots = document.querySelectorAll('.inventory-slot');
    inventorySlots.forEach((slot) => {
        const item = slot.firstChild;
        if (item) {
            let elementSave = formatToSave(item);
            inventory.push(elementSave);
        }
    });
    localStorage.setItem('inventory', JSON.stringify(inventory));
}
function formatToSave(element) {
    let elementSave = {};
    elementSave.name = element.getAttribute('data-name');
    if (element.tagName === 'IMG') {
        elementSave.type = 'img';
        elementSave.src = element.src;
    } else {
        elementSave.type = 'text';
        elementSave.text = element.textContent;
    }
    return elementSave;
}
function restituteElement(element, parent) {
    const newItem = document.createElement(
        element.type === 'img' ? 'img' : 'div'
    );
    newItem.setAttribute('data-name', element.name);
    if (element.type === 'img') {
        newItem.src = element.src;
    } else {
        newItem.textContent = element.text;
    }
    newItem.style.maxWidth = '100%';
    newItem.style.maxHeight = '100%';
    newItem.draggable = true;
    newItem.addEventListener('dragstart', (event) => {
        window.draggedItem = element.name;
    });
    newItem.addEventListener('dragend', (event) => {
        event.preventDefault();
        parent.innerHTML = '';
        saveInventoryToLocalStorage();
    });
    return newItem;
}

function initInventory(items) {
    initInventoryContainer();
    const inventorySlots = document.querySelectorAll('.inventory-slot');
    inventorySlots.forEach((slot) => {
        slot.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        slot.addEventListener('drop', (event) => {
            event.preventDefault();
            let interactableItem = items.find(
                (item) => item.name === window.draggedItem
            );
            if (!interactableItem) {
                return;
            }
            const item = document.querySelector(interactableItem.selector);
            if (!item) {
                return;
            }
            if (slot.firstChild) {
                slot.innerHTML = '';
            }

            const elem = restituteElement(formatToSave(item), slot);
            slot.appendChild(elem);
            saveInventoryToLocalStorage();
        });
    });

    function loadInventoryFromLocalStorage() {
        const inventory = JSON.parse(localStorage.getItem('inventory'));
        if (inventory) {
            inventory.forEach((element, index) => {
                const newItem = restituteElement(
                    element,
                    inventorySlots[index]
                );
                inventorySlots[index].appendChild(newItem);
            });
        }
    }

    loadInventoryFromLocalStorage();
}

export function setupInventory() {
    window.initInventory = initInventory;
    window.initInteractableItems = initInteractableItems;
}
