

import ProductDetail from "../../components/ProductDetail";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";



const ProductDetailPage =()=>{
    const context= useContext(MyContext)
    useEffect(()=>{
        context.values.setShowHeaderFooter(true)
        // window.scrollTo(0,0);
    },[context.values])
    return(<>
    
        <ProductDetail/>
    
    </>)
}
export default ProductDetailPage;


