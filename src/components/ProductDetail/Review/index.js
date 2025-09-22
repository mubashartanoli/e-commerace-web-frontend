import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ProfileImj from '../../../images/default Profile.jfif'
import Button from '@mui/material/Button';


const Review=()=>{
    return(<>
        <div className=' AddProductReview mt-4 pb-4'>
        <h3>ADD A REVIEW</h3>
     
            <div className=' AddProductReviewForm'>
                    <form action="" >
                <div className='rating '>
                    <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={5} precision={0.5}  /> </Stack>
                </div>
                <input type="text" placeholder='Your Name' className='inputs w-100 mt-3 p-3'  />
                <input type="email" placeholder='Your Email' className= 'inputs w-100  mt-3 p-3' />
                <textarea placeholder='Your Review' rows='8' className= 'inputs w-100  mt-3 p-3'></textarea>
               <Button>Publish Your Review</Button>
                </form>
            </div>
            </div>

    <div className="productDetailReview mt-4">
    <h3>1 review for All Natural Italian-Style Chicken Meatballs</h3>


    <div className="row ">

        <div className="ShowReview col-sm-2 "> 
            <div className=" image-warpper "><img src={ProfileImj} alt="img" className='w-100' /></div>
        </div>
        <div className="col-sm-8 ">
        <div className='rating'>
    <Stack spacing={1}> <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly /> </Stack>
    </div>

    <div className='accountName'> <h4>admin</h4> <span>– May 1, 2021</span></div>

    <div className='ShowReviewMassege'>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
        </div>
        
    </div>

        
  </div>
    
    </>)
}
export default Review;