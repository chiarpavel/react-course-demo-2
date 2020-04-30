import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h2>Parent</h2>

      <button type="button" onClick={() => setShowChild(!showChild)}>Toggle child</button>

      {showChild && <Child />}
    </div>
  );
}

export default Parent;
