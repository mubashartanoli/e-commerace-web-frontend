import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../../../App';
import { postData ,fetchDataFromApi} from "../../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
const AddReview= () => {
    const Context=useContext(MyContext);
        const setOpen=Context.values.setOpen;
         const setProgress=Context.values.setProgress;
         const setActive=Context.values.setActiveProductDetailBtn
          const setproductReviewData=Context.values.setproductReviewData
          const setReviewLength=Context.values.setReviewLength
    const navigate=useNavigate()
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("UserId");
  const Token = localStorage.getItem("Token");
  const { id } = useParams("id");
  const [formData, setFormData] = useState({
    product: id,
    userId: userId,
    Review: "",
    Ratting: 0,
  });
  const changeInput = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

const addreview=(e)=>{
     e.preventDefault();
     setProgress(25);
     setLoading(true);
     if(!Token ||Token===undefined ||Token===null ||Token===''){
navigate('/LoginPage');
setProgress(100)
setLoading(false)
return
     }
if(
    formData.Ratting===0||
    formData.Review===''||
    formData.product===''||
    formData.userId===''
){
  setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Please Add Value"
     })
     setLoading(false)
     setProgress(100)
     return;
}

postData('/api/review/add',formData).then((response)=>{

     fetchDataFromApi(`/api/review/getAll/${id}`).then((res)=>{
      setproductReviewData(res.data)
   
      setReviewLength(res.data.length)
       setOpen({
       status:true,
       color:'#7958b6',
       data:response.message
     })
     setActive('Two')
     setLoading(false)
setProgress(100);
     }).catch((err)=>{
           console.log(err)
setProgress(100);
    console.error('Error fetching product reviews:', err);
       })

}).catch((err)=>{
    console.log(err)
setProgress(100);
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:"Server err Please try again later.. "
     })
     setLoading(false)
     return;
})
  
}

  return (
    <>
   

      <div className=" AddProductReview mt-4 pb-4">
        <h3>ADD A REVIEW</h3>

        <div className=" AddProductReviewForm">
          <form onSubmit={addreview}>
            <div className="rating ">
              <Stack spacing={1}>
                <Rating
                  name="Ratting"
                  onChange={(event, value) => {
                    setRating(value);
                    setFormData(()=>({
                        ...formData,
                        [event.target.name]:value
                    }))
                  }}
                  defaultValue={rating}
                  precision={1}
                />{" "}
              </Stack>
            </div>
            <textarea
            name="Review"
              placeholder="Your Review"
              rows="3"
              onChange={(e)=>{changeInput(e)}}
              className="inputs w-100  mt-3 p-3"
            ></textarea>
            <Button type="submit" disabled={loading}>
                                       {loading===true?
                                    ( <CircularProgress className="Circular_Progress" />)
                                :
                                    'Publish Your Review'
                                }</Button>
          </form>
        </div>
      </div>

     
    </>
  );
};
export default AddReview;
