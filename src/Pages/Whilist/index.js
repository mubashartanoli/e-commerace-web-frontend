
import WhilistComp from "../../components/WhilistComp";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const Whilist =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
    })
    return(<>
   
        <WhilistComp/>
    
    </>)
}
export default Whilist;