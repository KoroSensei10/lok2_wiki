function (contents, password, phrase) {
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
};

window.lock = lock;