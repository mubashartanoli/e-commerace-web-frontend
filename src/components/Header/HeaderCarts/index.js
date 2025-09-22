import { BsBasket3 } from "react-icons/bs";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const HeaderCarts= ()=>{
    return(
        <>
         <div className='cart  d-flex align-items-center justify-content-center'>
                        <span >$ 0.00</span>
                          
                        <Button >
                            <Link to="/Cart">  
                            <BsBasket3  className='icon'/>
                            </Link>
                      
                        <span className='count d-flex align-items-center justify-content-center'>0</span>
                        </Button>

                        </div>
                        
        </>
    )
}

export default HeaderCarts;