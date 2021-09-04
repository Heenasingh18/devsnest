import {useState} from "react";
import Del from "./Day20Card";
function Day20(){
    const [cals, setCals]=useState([
        {food:"Pizza",calorie:56},
        {food:"Burger",calorie:69},
        {food:"Coke",calorie:500},
        {food:"Browne",calorie:180},
        {food:"Fried Rice",calorie:90},
        {food:"Lassania",calorie:200},
        {food:"Pani puri",calorie:10},
    ]);
    return(
        <>
        <div className="main20">
        {cals.length!==0?
           cals.map((cal,key)=>(
             <Del key={key} food={cal.food} calorie={cal.calorie} index={key} cals={cals} setCals={setCals}/>
         )):
         <h1>No Entry</h1>
         }
       </div>
       </>
    );
}
export default Day20;