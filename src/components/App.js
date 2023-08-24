import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {

  // Example of using useState
  let [updateArr, setUpdateArr] = useState('');
 
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  return (
    <div>
      <h1>Search item</h1>
      <input type='text' onChange={(e) => setUpdateArr(e.target.value)} />
      <ul>
        {fruits.map((item, i) => {
          if (updateArr === '' || item.includes(updateArr)) {
            return <li key={i}>{item}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default App;
