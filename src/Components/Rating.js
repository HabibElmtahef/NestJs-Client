import React from 'react'

const Rating = ({rat}) => {
    return (
           <div>
               {rat === 0.5 ? <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> <i style={{color:"gold"}} className="fas fa-star-half-alt"></i> 
               </div> 
               : <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> <i style={{color:"gold"}} className="fas fa-star-alt"></i> </div>}
               
               {rat === 1.5 ?  <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-half-alt"></i> </div> 
                : <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                </div>}
               
               {rat === 2.5 ? <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-half-alt"></i> </div> 
                : <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                </div>}
               
               {rat === 3.5 ? <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-half-alt"></i> </div> 
                : <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                </div>}
               
               {rat === 4.5 ? <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-half-alt"></i> </div> 
                : <div style={{display: "flex", alignItems:"center", marginRight: "10px"}}> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i> 
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                <i style={{color:"gold"}} className="fas fa-star-alt"></i>
                </div>}
           </div>
    )
}

export default Rating
