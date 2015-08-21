export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const MULTIPLICATIONBY2_COUNTER = 'MULTIPLICATIONBY2_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function multiplicationby2() {
  return {
    type: MULTIPLICATIONBY2_COUNTER
  };
}
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 3000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function multiplicationby2Async(delay = 3000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(multiplicationby2());
    }, delay);
  };
}