// The video for this file:
// https://youtu.be/R3y_-GoAoDQ
function hasItem(item: any): boolean {
  return false;
}

function deleteTheItem(item: any): void {
}

export function removeItem(item: any) {
  if (!hasItem(item)) {
    return;
  }

  deleteTheItem(item);
}

const items: any[] = [];
export function getItems(): any[] {
  if (!items) {
    return [];
  }

  return items;
}

let mapper: Function;
export function getItemMapper(): any {
  if (!mapper) {
    return item => item;
  }

  return mapper;
}

let items1 = getItems();
let mapper1 = getItemMapper();
items1.map(mapper1);