
import ProceedToCheckOutComp from "../../components/ProceedToCheckOut";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const ProceedToCheckOut =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
    })
    return(<>
   
        <ProceedToCheckOutComp/>
    
    </>)
}
export default ProceedToCheckOut;