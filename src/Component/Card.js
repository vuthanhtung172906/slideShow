import React,{useState} from "react";

function Card(props){
    const {data} = props;
    return(
        <>
         {data.map((item,index) => (
            <div className="card" key={index}>
                <img src={item.src} alt=""/>
            <div>
               <h2>{item.title}</h2>
               <p>{item.description}</p>
               <a href="/">Read More</a>
              </div> 
            </div>
          ))
         }
        </>

    )
}

export default Card;