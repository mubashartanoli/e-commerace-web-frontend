import OtpComp from "../../components/OtpComp";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const OtpPage =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(false)
    })
    return(<>
   

    <OtpComp/>
   
    </>)
}
export default OtpPage;