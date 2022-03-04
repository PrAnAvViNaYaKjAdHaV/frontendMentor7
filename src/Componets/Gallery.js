import React from 'react'
import './MainContent.css'
export default function Gallery(props) {
   return (
       <div className='Gallery'>
            <img className='gImage'
           src={props.url}
           alt={props.name}
       />
       <div className='header'>
           <p>{props.text1}<br/>
           {props.text2}</p>
       </div>
       </div>
   )
}
