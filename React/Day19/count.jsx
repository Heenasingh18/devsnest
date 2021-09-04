import {useState} from "react";
import "./Day19.css";
function Count(){
 const [state,setState]=useState(0);
 return(
  <div className="cnt" onClick={()=>setState(state+1)}>
      <h1>{state}</h1>
  </div>
 );
}
export default Count;