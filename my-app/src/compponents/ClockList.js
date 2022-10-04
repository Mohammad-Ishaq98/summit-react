import React from 'react';
import Clock from './Clock';


export default function ClockList({quantities = []}) {
    return(
      <div >
        {quantities.map((key) => 
                  <Clock  key ={ key} />
               
            )
         }
        {/* {
          //map method do 3 copies like this array
          //[<Clock/>,<Clock/>,<Clock/>]
          quantity.map((clock) =>(
            <Clock></Clock>
          ))
        } */}
         
      </div>
    )
}

//export default ClockList;