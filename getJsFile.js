// importe dynamiquement le fichier js qui correspond au nom de la page et l'execute

export const getJsFile = () => {
    const path = window.location.pathname.split('/').pop();
    const script = document.createElement('script');
    script.src = `https://lok2-wiki-js.vercel.app/pages/${path}.js`;
    document.head.appendChild(script);
};
