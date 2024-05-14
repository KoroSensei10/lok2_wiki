window.lock = (contents, password, phrase) => {
    contents.style.display = 'none';

    // créer un élément qui explique qu'il faut mettre un mot de passe pour voir la page, quand le mot de passe est correct ça remet les éléments
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

    button.addEventListener('click', () => {
        if (input.value === password) {
            lock.remove();
            contents.style.display = 'block';
        }
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (input.value === password) {
                lock.remove();
                contents.style.display = 'block';
            }
        }
    });
    return lock;
};
