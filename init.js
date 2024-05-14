import { getJsFile } from './getJsFile.js';
async function init(selector = '.contents') {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const contents = document.querySelector(selector);
    if (!contents) {
        return init();
    }
    getJsFile();
    return contents;
}

window.init = init;
