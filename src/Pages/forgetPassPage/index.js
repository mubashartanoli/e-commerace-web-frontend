

import ForgetPass from "../../components/forgetPassword";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const ForgetPasswordPage =()=>{
    const context= useContext(MyContext);
     useEffect(()=>{
            context.values.setShowHeaderFooter(false)
        })
    return(<>
    
        <ForgetPass/>
    
    </>)
}
export default ForgetPasswordPage;