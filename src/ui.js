import React from 'react'

export default function UI() {
    const Loading =()=>{
        setTimeout(()=>{
          const spinner= document.querySelector(".spinner-border")
       
          spinner.remove();
         },100)
      }
    return (
        <div>
      
        </div>
    )
}
