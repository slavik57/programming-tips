// The video explaining this file:
// https://youtu.be/wNwBzgDm0BI
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = {
    isLoading: false,
    items: []
};
let lastSession = null;
function fetchItems(timeToDelay, items) {
    const currentSession = {};
    lastSession = currentSession;
    exports.state.isLoading = true;
    console.log('fetchItems:', exports.state);
    fetch(timeToDelay, items)
        .then((items) => {
        if (currentSession !== lastSession) {
            console.log('aborting');
            return;
        }
        updateState(items);
    });
}
function updateState(items) {
    exports.state.isLoading = false;
    exports.state.items = items;
    console.log('updateState:', exports.state);
}
function fetch(timeToDelay, items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, timeToDelay);
    });
}
fetchItems(20, [1, 2]);
fetchItems(10, [3, 4]);
