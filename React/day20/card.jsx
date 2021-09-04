import "./Day20.css"
const Del=({food,calorie,index,cals,setCals})=>{
  return(
      <div className="container20">
        <button onClick={()=>{
             const newCals=cals.filter((el,i)=>i!==index);
             setCals(newCals);
           }}>
              Delete
          </button>
          <h1>{food}</h1>
          <h2>You have consumed {calorie} cals today.</h2>
      </div>
  );
}
export default Del;