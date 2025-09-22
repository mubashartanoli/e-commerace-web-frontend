
import LoginComp from "../../components/LoginComp";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const LoginPage =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(false)
    })
    return(<>
    
        <LoginComp/>
    
    </>)
}
export default LoginPage;