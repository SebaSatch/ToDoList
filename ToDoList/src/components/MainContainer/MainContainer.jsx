import React from 'react'
import { useState } from 'react'
import NewTask from '../NewTask/NewTask'

const MainContainer = () => {
    const [list,setList] = useState([])
    const [value, setValue] = useState("")    

    const onClickHandler =(e)=>{
        console.log(value)
        e.preventDefault()
        setList([...list, value])      
    }

    console.log(list)
    

    const onClickHandler2 = (index) => {
        console.log(index) 
        const filtrado = list.filter(caca => parseInt(list.indexOf(caca)) != (parseInt(index))) 
        console.log(filtrado)
        setList(filtrado)
        console.log(filtrado)
         
       }
        
    return (
        <>
            <form>
                <input value={value} onChange={e => setValue(e.target.value)} />  
                <button onClick={onClickHandler}> Agregar Tarea </button>
            </form>
            <NewTask list={list} removeHandler={onClickHandler2}> </NewTask>
            
        </>
    )





//     const [task, setTask] = useState ("")
//     const [list,setList] = useState ([])

//     const handleChange = (e) => {
//         e.preventDefault();
//         setTask(e.target.value)
//     }

//     const handleClick = (e) => {
//         setList(...list, e.target.value)      
//         console.log(list)  
//     }

//   return (
//     <>
//      <div>
//         <input type="text" value={task} onChange={handleChange}/>
//         <button onClick={handleClick}> Crear    
//             </button>
//      </div> 
//     </>
//   )
}

export default MainContainer
