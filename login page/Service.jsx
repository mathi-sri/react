import { useState } from "react";


const Service=(props)=>{
    const [color,setcolor]=useState("grey")
    return (
        <div>
            <h2>Serice Component</h2>
            <p style={{color:color}}>pros is {props.data.name}</p>
            <button onClick={()=>setcolor("blue")}>like</button>
            
        </div>
    )
}

export default Service;