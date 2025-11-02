

import NewPass from "../../components/NewPass";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const EnterNewPass =()=>{
    const context= useContext(MyContext);
     useEffect(()=>{
            context.values.setShowHeaderFooter(false)
        })
    return(<>
    
        <NewPass/>
    
    </>)
}
export default EnterNewPass;