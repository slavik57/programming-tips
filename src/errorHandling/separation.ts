// Video for this file:
// https://youtu.be/ZMMAQJvRQH4

export function tryDoingStuff() {
  try {
    return doLogic();
  } catch(e) {
    return handleError(e);
  }
}

export function doLogic() {
  throw new Error();
}

export function doOtherLogic() {
  throw new Error();
}


export function tryDoingOtherStuff() {
  try {
    return doOtherLogic();
  } catch(e) {
    return handleError(e);
  }
}

export function handleError(e) {
  console.log(e);
  return false;
}