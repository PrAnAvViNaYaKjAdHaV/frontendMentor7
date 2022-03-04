import React from 'react'
import './MainContent.css'
export default function Avtar(props) {
   return (
       <img className='Image'
           src={props.url}
           alt={props.name}
       />
   )
}
