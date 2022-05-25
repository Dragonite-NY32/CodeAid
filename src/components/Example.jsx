/**
 * ************************************
 *
 * @module  Example.jsx
 * @author Tim Ruszala
 * @date
 * @description Just a test to get my bearings with React again
 *
 * ************************************
 */

import React, {useState} from 'react';

const Example = props => {

  const [number, setNumber] = useState(1);

  return (
    <>
      <h2>Example</h2>
      <p onClick={() => setNumber(number + 1)}>props.number = {number}</p>
    </>
  );
}

export default Example;