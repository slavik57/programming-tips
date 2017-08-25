// The video for this file:
// https://youtu.be/pUvEbQk1dWg
export enum ErrorCode {
  SomeError = 1010101
}
function failWithErrorCode() {
  return ErrorCode.SomeError;
}
function failWithException(userId: string) {
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
  } catch (e) {
    throw new DeleteCommentError(commentId, e);
    // Handle error
  } finally {
    // Some finalizing logic
  }
}
export class ComplexError extends Error {
  constructor(message: string, public inner: Error) {
    super(message);
    this.stack += '\ninner:\n' + this.inner.stack;
  }
}
export class DeleteCommentError extends ComplexError {
  constructor(public commentId: string, inner) {
    super(`failed deleting the comment [${commentId}]`, inner);
  }
}