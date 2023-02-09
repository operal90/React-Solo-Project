
import Fill from "../image/fills.svg"

function Main (props) {
   
    return (

        <div className="main">
           <div>
           
           </div>
           <div className="grid">
             <div className="flex ">
               <img src={Fill} className="image--fill"/>
               <span>{props.item.location}</span>
               <a href="#">View on google map</a>
             </div>
             <div className="main--div"><h2>{props.item.title}</h2></div>
             <div className="main--date">{props.item.startDate} - {props.endDate}</div>
             <div><p className="main--para">{props.item.description}</p></div>
           </div>
            
        </div>
    )
}
export default Main