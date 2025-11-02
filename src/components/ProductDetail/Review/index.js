import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ProfileImj from "../../../images/default Profile.jfif";
import { useContext, useState } from "react";
import { MyContext } from '../../../App';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { fetchDataFromApi } from "../../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
const Review = () => {
  const Context=useContext(MyContext);
 const [updateLoading,setupdateLoading]=useState()
        const data =Context.values.productReviewData;
        const setproductReviewid =Context.values.setproductReviewid;
        const setdeleteReviewData =Context.values.setdeleteReviewData;
        const setupdateReviewData =Context.values.setupdateReviewData;
        const setupdateReviewDilog =Context.values.setupdateReviewDilog;
        const setProgress =Context.values.setProgress;
       const setReviewproductid=Context.values.setReviewproductid
const {id}=useParams()
const userId=localStorage.getItem('UserId')
const updateData=(id)=>{
 
  setProgress(25)
  setproductReviewid(id);
  setupdateLoading(id)
 fetchDataFromApi(`/api/review/getOne/${id}`).then((res)=>{
  setProgress(80)
       
        setupdateReviewData(res.data)
        setTimeout(() => {
          setProgress(100)
          setupdateReviewDilog(true)
          setupdateLoading()
        }, 1000);
      }).catch((err)=>{
         setProgress(100)
        setupdateLoading()
        console.log(err)
      })
}
  return (
    <>
    {
      data && data!==''&& data.length>0 && [...data].reverse().map((data)=>{
       
          const CreatedDate=new Date(data.CreatedDate)
       const datePublish=  CreatedDate.toLocaleString('en-GB',{
    month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})

        return(
   <div className="productDetailReview productDetailReviewBorder mt-4" key={data._id}>
       

        <div className="row ">
          <div className="ShowReview ">
            <div className=" image-warpper ">
              <img src={ProfileImj} alt="img" className="w-100" />
            </div>
          </div>
          <div className="account-name-wapper ">
            
            <div className="accountName">
            
              <h3>{data.userId.username} </h3>
               <p> {datePublish}</p>
            </div>
            <div className="rating">
              <Stack spacing={1}>
               
                <Rating
                  name="half-rating-read"
                  defaultValue={data.Ratting}
                 
                  readOnly
                />
              </Stack>
            </div>


           
          </div>
{
  data.userId._id===userId &&
  <div className="Delete-Review-Div  h-100">
<Button disabled={data.userId._id!==userId||updateLoading===data._id}
 onClick={()=>{updateData(data._id)}}
  className="Edit Btn"><ModeEditIcon/>
         {updateLoading===data._id?
                                    ( <CircularProgress className="Circular_Progress" />)
                                :
                                   <span className="_text">Edit</span>
                                }  </Button>

<Button disabled={data.userId._id!==userId} 
onClick={()=>{setproductReviewid(data._id); setReviewproductid(id); setdeleteReviewData(true)}} 
className="Delete Btn"><DeleteIcon/> <span className="_text">Delete</span> </Button>
          </div>
}
          
        </div>
         <div className="ShowReviewMassege">
            <p>
  {data.Review}
            </p>
           
            </div>
{data?.Reply!== 'none' && 
<div className="AdminReply w-100">
               <div className="productDetailReview ReplyWapper mt-4" key={data._id}>
       

        <div className="row ">
          <div className="ShowReview ">
            <div className=" image-warpper ">
              <img src={ProfileImj} alt="img" className="w-100" />
            </div>
          </div>
          <div className="account-name-wapper">
            
            <div className="accountName">
            
              <h3>Admin </h3>
               
            </div>
            <div className="rating">
              <Stack spacing={1}>
               
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                 
                  readOnly
                />
              </Stack>
            </div>


           
          </div>
       
        </div>
         <div className="ShowReviewMassege">
            <p>
{data?.Reply}
            </p>
           
            </div>

           
      </div>
            </div>}
            
      </div>
   ) })  
    }
  
  {/* <div className="productDetailReview productDetailReviewBorder mt-4" key={data._id}>
       

        <div className="row ">
          <div className="ShowReview ">
            <div className=" image-warpper ">
              <img src={ProfileImj} alt="img" className="w-100" />
            </div>
          </div>
          <div className="account-name-wapper ">
            
            <div className="accountName">
            
              <h3>data.userId.username </h3>
               <p> datePublishdatePublish</p>
            </div>
            <div className="rating">
              <Stack spacing={1}>
               
                <Rating
                  name="half-rating-read"
                  defaultValue={2}
                 
                  readOnly
                />
              </Stack>
            </div>


           
          </div>
          <div className="Delete-Review-Div  h-100">
<Button className="Edit Btn" 
 onClick={()=>{setproductReviewid(data._id); setupdateReviewData(true)}}
><ModeEditIcon/> <span className="_text">Edit</span> </Button>
<Button className="Delete Btn"
onClick={()=>{setproductReviewid(data._id); setdeleteReviewData(true)}} 
><DeleteIcon/> <span className="_text">Delete</span> </Button>
          </div>
        </div>
         <div className="ShowReviewMassege">
            <p>
            
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
 Repellat corrupti officia facere, odit autem quas laborum 
 voluptates beatae quidem veniam nisi ipsum, pariatur voluptatum quo 
 aperiam ea? Numquam, itaque nobis fuga enim omnis a facilis mollitia
  alias temporibus modi voluptatibus labore quas minus tempore accusantium 
            </p>
           
            </div>

            <div className="AdminReply w-100">
               <div className="productDetailReview ReplyWapper mt-4" key={data._id}>
       

        <div className="row ">
          <div className="ShowReview ">
            <div className=" image-warpper ">
              <img src={ProfileImj} alt="img" className="w-100" />
            </div>
          </div>
          <div className="account-name-wapper">
            
            <div className="accountName">
            
              <h3>name </h3>
               <p> datePublish</p>
            </div>
            <div className="rating">
              <Stack spacing={1}>
               
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                 
                  readOnly
                />
              </Stack>
            </div>


           
          </div>
       
        </div>
         <div className="ShowReviewMassege">
            <p>
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
 Repellat corrupti officia facere, odit autem quas laborum 
 voluptates beatae quidem veniam nisi ipsum, pariatur voluptatum quo 
 aperiam ea? Numquam, itaque nobis fuga enim omnis a facilis mollitia
  alias temporibus modi voluptatibus labore quas minus tempore accusantium 
            </p>
           
            </div>

           
      </div>
            </div>
      </div> */}
   

     
    </>
  );
};
export default Review;
