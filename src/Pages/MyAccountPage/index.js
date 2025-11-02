

import MyAccount from "../../components/MyAccount";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const MyAccountPage =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
        // window.scrollTo(0,0);
    },[context.values])
    return(<>
    
        <MyAccount/>
    
    </>)
}
export default MyAccountPage;


