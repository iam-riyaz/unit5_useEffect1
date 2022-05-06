import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import {useEffect, useState} from "react"

function App() {
 const [todos, setTodos]=useState([])
//  const [age,setAge]=useState(12)

const [text,setText]=useState("")

 useEffect(()=>{
   console.log("effect 1 is printing")
   async function getData(){
     const data= await fetch("http://localhost:7500/User").then((d)=>d.json())
       setTodos(data)
   }
   getData()
 },[todos]) //run only once in starting because array is empty if we do not use any array than this will run again and again whenever any component is rendring 


//  useEffect(()=>{
//    console.log("effect 2 is printing")
//  },[age]) //only run when age value is change but run at only once in starting without value change

  return (
    <div className="App">
      <div><input type="text" placeholder='add todo' onChange={(e)=>{setText(e.target.value)}}/> 
      <button onClick={()=>{
        const payload={
          name:text,
            
            };
             fetch("http://localhost:7500/User", {
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(payload),
        });
      }}>add todo</button></div>
      {todos.map((Usser)=>(
        <div> {Usser.name} </div>
      )
        
       
      )}
      {/* <button onClick={()=>{
        setAge(age+2)
      } }>change age</button> */}
    </div>
  );
}

export default App;
