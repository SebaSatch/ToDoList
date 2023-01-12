import React from 'react'

const NewTask = ({list, removeHandler}) => {

  return (

          list.map((item, index) =>   
            
                <div key={index}>   
                    {item}   
                    <button onClick={ () => removeHandler(index)}> Tarea complitid cating </button>   
                    {/* Esto de aca arriba NO LO ENTIENDO */}
                </div>
          )      
 
  )  
}

export default NewTask
