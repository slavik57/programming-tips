// The video explaining this file:
// https://youtu.be/wNwBzgDm0BI

export const state = {
  isLoading: false,
  items: []
}

let lastSession = null;

function fetchItems(
  timeToDelay: number,
  items: any[]) {
  const currentSession = {};
  lastSession = currentSession;

  state.isLoading = true;
  console.log('fetchItems:', state);
  fetch(timeToDelay, items)
    .then((items: any[]) => {
      if (currentSession !== lastSession) {
        console.log('aborting')
        return;
      }

      updateState(items);
    });
}

function updateState(items: any[]) {
  state.isLoading = false;
  state.items = items;
  console.log('updateState:', state);
}

function fetch(
  timeToDelay: number,
  items: any[]
): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, timeToDelay);
  });
}

fetchItems(20, [1, 2]);
fetchItems(10, [3, 4]);
