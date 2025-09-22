import { LiaTshirtSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";

const FooterIconBox=()=>{
    return(
        <>
        <div className="FooterIconBox container pb-5 pt-5">
            <div className="row">
                <div className=" col-sm-3">

                 <div className="FooterIconBoxInfo cursor  border-right_ w-100  d-flex align-items-center justify-content-center ">
                 <div className="FooterIconBoxIcon halfOpacity"><LiaTshirtSolid /></div> 
                 <div className="FooterIconBoxPara ">Everyday fresh products</div>
                 </div>

                </div>
                <div className=" col-sm-3">

                 <div className="FooterIconBoxInfo cursor  border-right_ w-100  d-flex align-items-center justify-content-center ">
                 <div className="FooterIconBoxIcon halfOpacity"><TbTruckDelivery /> </div> 
                 <div className="FooterIconBoxPara ">Free delivery for order over $700</div>
                 </div>
                 
                </div>
                <div className=" col-sm-3">

                <div className="FooterIconBoxInfo cursor border-right_ w-100  d-flex align-items-center justify-content-center ">
                 <div className="FooterIconBoxIcon"><CiDiscount1 /></div> 
                 <div className="FooterIconBoxPara ">Daily Mega Discounts</div>
                 </div>
                 
                </div>
                <div className=" col-sm-3">

                <div className="FooterIconBoxInfo cursor  w-100  d-flex align-items-center justify-content-center ">
                 <div className="FooterIconBoxIcon"><CiBadgeDollar /></div> 
                 <div className="FooterIconBoxPara ">Best price on the market</div>
                 </div>
                 
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterIconBox;