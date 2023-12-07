import { useState } from "react"


function App() {
  
const [color,setColor]= useState('black')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
          <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Green</button>
          <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Blue</button>
          <button onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Olive </button>
          <button onClick={()=>setColor("gray")} style={{backgroundColor:"gray"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Gray</button>
          <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Yellow</button>
          <button onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Pink</button>
          <button onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Purple</button>
          <button onClick={()=>setColor("lavender")} style={{backgroundColor:"lavender"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Lavendor</button>
          <button onClick={()=>setColor("white")} style={{backgroundColor:"white"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">White</button>
          <button onClick={()=>setColor("black")} style={{backgroundColor:"black"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
