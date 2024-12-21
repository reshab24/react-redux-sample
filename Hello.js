import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export const Hello = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      {counterState}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </>
  );
};
