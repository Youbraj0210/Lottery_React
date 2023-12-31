import React from 'react'
import { Ticket } from './Ticket'
import { genNumber,sum } from './helper'
import { useState } from 'react'

export const Lottery = ({n,win}) => {
    const [ticket, setTicket] = useState(genNumber(n));
    let genticket = ()=>{
        setTicket(genNumber(n))
    };

    let result = sum(ticket);

  return (
    <div>
        <h1>Lottery</h1>
        <button onClick={genticket} style={{marginBottom:"1rem"}}>Generate</button>
        <Ticket ticket={ticket}/>
        {result == win && <p>CONGRATULATIONS YOU WON</p>}
    </div>
  )
}
