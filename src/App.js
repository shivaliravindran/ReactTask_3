import React from 'react';
import Picker from './Components/Picker';

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'black'];

  return (
    <div>
      <Picker colors={colors} />
    </div> 
  );
};

export default App;

