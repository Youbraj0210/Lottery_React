import React from 'react'
import { Ticketnum } from './Ticketnum'
import "./Ticket.css"

export const Ticket = ({ticket}) => {
  return (
    <div className='Ticket'>
        <p>Ticket</p>
        <div className="contain">
        {ticket.map((e,index)=>(
            <Ticketnum num={e} key={index}/>
        ))}
        </div>
    </div>
  )
}
