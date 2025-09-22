import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
// import { MdOutlineCompareArrows } from "react-icons/md";



const AddToFavorite= ()=>{
    return(<>
   <div className="add-to-favorite mt-4 d-flex align-items-center justify-content-between">
                <Button><Link to='#'> <MdFavoriteBorder /> ADD TO FAVORITE </Link></Button>
                {/* <Button><Link to='#'> <MdOutlineCompareArrows /> COMPARE</Link></Button> */}
                </div>
    </>)
}
export default AddToFavorite;