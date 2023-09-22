import  Event  from "./Event"
import React, { Children, useState } from "react";
// import Usercontext from "./usercontext";

const Eventprovider=({children})=>{
    const [user,setUser]=useState(false);
    return(
        <Event.Provider value={{user,setUser}}>
            {children}
        </Event.Provider>
    )
}

export default Eventprovider;