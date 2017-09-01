"use strict";
// The video for this file:
// https://youtu.be/ji1-TtqFy7Q
Object.defineProperty(exports, "__esModule", { value: true });
const some3rdParty = {
    doStuff: () => { throw Error('not initialized'); }
};
class NotInitializedError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.NotInitializedError = NotInitializedError;
class Some3rdPartyWrapper {
    doStuff() {
        try {
            some3rdParty.doStuff();
        }
        catch (e) {
            this.handleError(e);
        }
    }
    handleError(error) {
        if (error instanceof Error && error.message === 'not initialized') {
            throw new NotInitializedError('some3rdParty is not initized');
        }
    }
}
exports.Some3rdPartyWrapper = Some3rdPartyWrapper;
