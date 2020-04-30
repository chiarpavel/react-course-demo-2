import React, { useEffect, useState } from 'react';

function ClockFunction() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    function tick() {
      setDate(new Date());
    }

    const timerID = setInterval(
      () => tick(),
      1000,
    );

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h2>This is a function component</h2>
      <h3>It is {date.toLocaleTimeString()}.</h3>
    </div>
  );
}

export default ClockFunction;
