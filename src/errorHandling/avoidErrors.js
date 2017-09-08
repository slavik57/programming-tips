"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The video for this file:
// https://youtu.be/R3y_-GoAoDQ
function hasItem(item) {
    return false;
}
function deleteTheItem(item) {
}
function removeItem(item) {
    if (!hasItem(item)) {
        return;
    }
    deleteTheItem(item);
}
exports.removeItem = removeItem;
const items = [];
function getItems() {
    if (!items) {
        return [];
    }
    return items;
}
exports.getItems = getItems;
let mapper;
function getItemMapper() {
    if (!mapper) {
        return item => item;
    }
    return mapper;
}
exports.getItemMapper = getItemMapper;
let items1 = getItems();
let mapper1 = getItemMapper();
items1.map(mapper1);
