import AllOrderComp from "../../components/AllOrderComp";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const AllOrder = () => {
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
    })
    return(<>
    <AllOrderComp/>
    </>)
}
export default AllOrder;