import React from 'react';
import ClockList from './compponents/ClockList';
import Form from './compponents/Form';

function App(){
  const quantities = [1,2,3];
  return(
    <div className="">
      {/* <Clock locale="bn-BD"></Clock> */}
      <ClockList quantities={quantities}>
      </ClockList>
      <Form></Form>
    </div>
  )
}

export default App;
