async function init(selector = '.contents') {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const contents = document.querySelector(selector);
    if (!contents) {
        return init();
    }
    return contents;
}

window.init = init;
