"use strict";
// Video for this file:
// https://youtu.be/wEdYinHwNGo
Object.defineProperty(exports, "__esModule", { value: true });
function tryDoingStuff() {
    try {
        return doLogic();
    }
    catch (e) {
        return handleError(e);
    }
}
exports.tryDoingStuff = tryDoingStuff;
function doLogic() {
    throw new Error();
}
exports.doLogic = doLogic;
function doOtherLogic() {
    throw new Error();
}
exports.doOtherLogic = doOtherLogic;
function tryDoingOtherStuff() {
    try {
        return doOtherLogic();
    }
    catch (e) {
        return handleError(e);
    }
}
exports.tryDoingOtherStuff = tryDoingOtherStuff;
function handleError(e) {
    console.log(e);
    return false;
}
exports.handleError = handleError;
