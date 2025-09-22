import SignupComp from "../../components/SignupComp";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const SignupPage =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(false)
    })
    return(<>
   

    <SignupComp/>
   
    </>)
}
export default SignupPage;