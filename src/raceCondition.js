const state = {
    isLoading: false,
    items: []
};
let lastSession = null;
function fetchItems(timeToDelay, items) {
    const currentSession = {};
    lastSession = currentSession;
    state.isLoading = true;
    console.log('fetchItems:', state);
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
    state.isLoading = false;
    state.items = items;
    console.log('updateState:', state);
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
