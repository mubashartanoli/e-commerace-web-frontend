import tableimg from '../../../images/Man-Banner-five.jpg'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AddSbstr from '../../CartDiv/PlusMinusBtn'
import Button from '@mui/material/Button';
import { MdOutlineClose } from "react-icons/md";



const CartLeftPart=()=>{
    return(<>
    <div className="CartLeftPartHead">
    <div>YOUR CART</div>
    <p>There are <b>1</b> Product in your cart.</p>
    </div>
    <div className="CartLeftPartTable w-100">
        <table className="table">
            <thead>
           <tr>
            <th width="50%">Product</th>
            <th width="10%">Price</th>
            <th width="20%" > <div className='w-100 d-flex justify-content-center'>Quantity</div></th>
            <th width="10%">Subtotal</th>
            <th width="10%">Delete</th>
            </tr>
            </thead>

            <tbody>
                
                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td  width="50%">
                        <div className='row-Warpper w-100'>
                        <div className='image-Warpper'>
                           <img src={tableimg} alt="" />
                        </div>
                        <div className='text-Warpper'>	
                        <p>The one of the best teashirt for boys, with ultra premium staff.</p> 
                        <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> </Stack>
                            </div>

                        </div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p> </td>
                    <td width="20%">
                    <div className='AddSbstr'> <AddSbstr/></div>
                    </td>
                    <td width="10%"> <p className='price'>$100.99</p></td>
                    <td width="10%">
                        <div className='delete'>
                         <Button> <MdOutlineClose /></Button>
                        </div>
                    </td>
                </tr>

            </tbody>
     
     


        </table>
</div>
        <div className='CartLeftPartTableCoupenWapper w-100 d-flex  align-item-center justify-content-between '>

       <div className='CouppenWapper'> 
   

        <input type="text" placeholder='Coupen Code'/>

      <Button>Submit</Button>  
     
       </div>

       <Button>Delete All</Button>

        </div>
    
    </>)
}
export default CartLeftPart;