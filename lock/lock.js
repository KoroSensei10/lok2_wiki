function lock(contents, password, phrase) {
    if (localStorage.getItem('unlocked-' + password) === 'true') {
        contents.style.display = 'block';
        return;
    }

    contents.style.display = 'none';

    const lock = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    lock.classList.add('lock');
    input.placeholder = 'Mot de passe';
    input.classList.add('password');
    button.classList.add('unlock');

    lock.innerHTML = phrase;
    input.type = 'password';
    button.innerHTML = 'Débloquer';

    lock.appendChild(input);
    lock.appendChild(button);

    function unlock() {
        if (input.value === password) {
            lock.remove();
            contents.style.display = 'block';
        }
            // localstorage
    localStorage.setItem('unlocked-' + password, 'true');

    }

    button.addEventListener('click', () => {
        unlock();
    });
    input.addEventListener('keydown', (event) => {
        unlock();
    });

    const parent = contents.parentElement;
    parent.insertBefore(lock, contents);

    return lock;
}

// même base que pour la fonction lock mais pour débloquer il faut drag un item sur une zone prévue pour ça
function lockByItem(contents, itemName, phrase, dropMessage = 'Déposer ici') {

    if (localStorage.getItem('unlocked-item-' + itemName) === 'true') {
        contents.style.display = 'block';
        return;
    }

    contents.style.display = 'none';

    const lock = document.createElement('div');
    const dropZone = document.createElement('div');

    lock.classList.add('lock');
    dropZone.classList.add('drop-zone');

    lock.innerHTML = phrase;
    dropZone.innerHTML = dropMessage;

    lock.appendChild(dropZone);

    function unlock() {
        lock.remove();
        contents.style.display = 'block';
        localStorage.setItem('unlocked-item-' + itemName, 'true');
    }

    function onDragOver(event) {
        event.preventDefault();
    }

    function onDrop(event) {
        event.preventDefault();
        if (window.draggedItem === itemName) {
            unlock();
        }
    }

    dropZone.addEventListener('dragover', onDragOver);
    dropZone.addEventListener('drop', onDrop);

    const parent = contents.parentElement;
    parent.insertBefore(lock, contents);

 
    return lock;

}

export function setupLock() {
    window.lock = lock;
    window.lockByItem = lockByItem;
}
