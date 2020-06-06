import React from 'react'
import './list.css'
import Ratingtab from './Ratingtab'


const Movieli = (props) => {
    return (
        <div className="container">
             {props.list.map((e,index)=>
           <div key={index}>
               
           <h2 className="h2">{e.Title}</h2>
           <img  src={e.Image}alt="filmimage" width="300px" height="350px"></img>
           <p className="desc">{e.Descr}</p>

          
       <p className="rating"><Ratingtab a={e.Rating}></Ratingtab></p> 
    
           
            </div>
           )}
            
        </div>
    )
}

export default Movieli
