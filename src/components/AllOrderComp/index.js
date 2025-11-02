
import { useContext, useEffect } from "react";
import { MyContext } from '../../App';
import { useNavigate } from "react-router-dom";
import { fetchDataFromApi} from "../../utils/api";



const AllOrderComp=()=>{
    const navigate=useNavigate();
      const Context=useContext(MyContext);
   const OrderData=Context.values.OrderData;
   const setOrderData=Context.values.setOrderData;
   
   useEffect(()=>{
    const UserId=localStorage.getItem('UserId')
if(OrderData?.length>0){return;}
fetchDataFromApi(`/api/Order/getById/${UserId}`).then((res)=>{
setOrderData(res.data);

}).catch((err)=>{
    console.log(err)
})
},[setOrderData,OrderData])
return(<>
<div className=" container overflow-auto">
    <div className="OrderTableWrapper">
<table>
    <thead>

        <tr>
            <td width={"100px"}>
                <div className="d-flex justify-content-center align-items-center" >
                    
               Image 
                </div>
            </td>
            <td width={"200px"}>
                Names
            </td>
            <td width={"50px"}>
                Quantity
            </td>
        
            <td width={"100px"}>
               Price 
            </td>
            <td width={"100px"}>Delivery Charges</td>
            <td width={"100px"}>Grand Total</td>
            <td width={"200px"}>
                 <div className=" w-100 d-flex justify-content-center align-items-center" >
                    
Order Status
                </div></td>
                    <td width={"200px"}>
                        <div className=" w-100 d-flex justify-content-center align-items-center" >
                         Provance</div></td>
            <td width={"200px"}>
       <div className=" w-100 d-flex justify-content-center align-items-center" >
                         City</div></td>
            <td width={"300px"}>
           <div className=" w-100 d-flex justify-content-center align-items-center" >
                         Address</div></td>
        </tr>

    </thead>
    <tbody>
        {
            OrderData && OrderData?.length>0 && [...OrderData].reverse().map((data)=>{
               
        
                return(
 <tr key={data._id}>
            <td width={"100px"}>
               <div className="OrderTableContainer">
    {
        data.products.length>0 && data.products.map((product) => (
            <div className="imgWapper" key={product._id}>
                <img width={'100%'} src={product.productID.image[0]} alt={product.productID.name} />
            </div>
        ))
    }

 
               </div>
            
            </td>
            <td width={"200px"}>
                  <div className="OrderTableBodyContainer">
                        {
        data.products.length>0 && data.products.map((product) => (
            <div onClick={() => navigate(`/ProductDetail/${product.productID._id}`)} className="NameWapper hoverWapper" key={product._id}>
                        <p>{product.productID.name}</p>
                    </div>
        ))
    }
 </div>
            </td>
             <td width={"50px"}>
                    <div className="OrderTableBodyContainer">
                    
                   {
        data.products.length>0 && data.products.map((product) => (
            <div className="NameWapper" key={product._id}>
                        <p>{product.itemQuantity}</p>
                    </div> 
        ))
    }
         </div>
            </td>
            <td width={"100px"}>
                    <div className="OrderTableBodyContainer">
                 {
        data.products.length>0 && data.products.map((product) => (
            <div className="NameWapper" key={product._id}>
                        <p>{product.subTotal}</p>
                    </div>
        ))
    }
                  </div>
            </td>
          <td width={"100px"}>300</td> 
            <td width={"100px"}>
                
               {data.total}
            </td>
            <td width={"300px"}>
                    <div className=" w-100 d-flex justify-content-center align-items-center" >
 {data.orderStatus==='confirmed'? <div className="_confirmed">Confirmed</div>:
      data.orderStatus==='shipped'? <div className="_shipped w-100">
       your Order is HandOver to Courier Service <b>{data.courierName}</b> at <b>{data.ShippedAt}</b> it 
       can Be Deleverd on <b>{data.DeliveryDate}</b> with TrackingId <b>{data.TrackingId}</b>
         </div>:
   <div className="_Pending">Pending</div>}
               
                </div> </td>
                            <td width={"200px"}>
                                <div className=" w-100 d-flex justify-content-center align-items-center" >
                         {data.Province}</div>
              
            </td>
            <td width={"200px"}>
           <div className=" w-100 d-flex justify-content-center align-items-center" >
                         {data.city}</div></td>
            <td width={"300px"}>
           <div className=" w-100 d-flex justify-content-center align-items-center" >
                   {data.address}  </div></td>
        </tr>
                )
            })
        }
       
    </tbody>
</table>
    </div>

</div>
</>)
}
export default AllOrderComp;