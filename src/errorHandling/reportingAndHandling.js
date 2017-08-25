"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The video for this file:
// https://youtu.be/pUvEbQk1dWg
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SomeError"] = 1010101] = "SomeError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
function failWithErrorCode() {
    return ErrorCode.SomeError;
}
function failWithException(userId) {
    throw new Error(`The user [${userId}] does not have permissions to delete the item`);
}
function handleErrorCodes() {
    const error1 = failWithErrorCode();
    if (error1) {
        // Handle error
        console.log('The error was inside failWithErrorCode');
        return error1;
    }
    const error2 = failWithErrorCode();
    if (error2) {
        // Handle error
    }
}
function handleExceptions(commentId) {
    try {
        failWithException('123');
        failWithException('123');
    }
    catch (e) {
        throw new DeleteCommentError(commentId, e);
        // Handle error
    }
    finally {
        // Some finalizing logic
    }
}
class ComplexError extends Error {
    constructor(message, inner) {
        super(message);
        this.inner = inner;
        this.stack += '\ninner:\n' + this.inner.stack;
    }
}
exports.ComplexError = ComplexError;
class DeleteCommentError extends ComplexError {
    constructor(commentId, inner) {
        super(`failed deleting the comment [${commentId}]`, inner);
        this.commentId = commentId;
    }
}
exports.DeleteCommentError = DeleteCommentError;
