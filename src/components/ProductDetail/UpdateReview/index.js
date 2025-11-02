import  React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {useContext,useState } from 'react';
import {MyContext} from '../../../App'
// import {deleteData, fetchDataFromApi} from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from '@mui/material/TextField';
import { updateData,fetchDataFromApi } from '../../../utils/api';
import UpdateIcon from '@mui/icons-material/Update';


export default function DeleteDailoge() {
      const Context= useContext(MyContext);
      const[deleteLoading,setDeleteLoading]=useState(false)
      const[ProductId,setProductId]=useState(null)
   
        
        //  const productReviewid= Context.values.productReviewid;
         const open= Context.values.updateReviewDilog;
            const setOpen= Context.values.setupdateReviewDilog;
            const updateReviewData= Context.values.updateReviewData;
            const setMsgOpen=Context.values.setOpen;
            const setproductReviewData=Context.values.setproductReviewData;
             const setReviewLength=Context.values.setReviewLength;
     const setProgress=Context.values.setProgress
       const [formData, setFormData] = useState({
    Review: '',
    Ratting: 0,
  });
  useEffect(()=>{
    if(open===true && updateReviewData!==null){
      setProductId(updateReviewData.product._id)
setFormData({
   Review: updateReviewData ? updateReviewData.Review:'',
    Ratting: updateReviewData ? updateReviewData.Ratting:0,
})
    }
return;
  },[open,updateReviewData])

  const changeInput = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  
const DeletProDuctFunc=async()=>{
  setDeleteLoading(true)
  setProgress(25);
  if(updateReviewData===null ||formData.Review===''||ProductId===null){
    setMsgOpen({
       status:true,
       color:'#fa3e3e',
       data:"Can't update Review Please Try again later..."
     })
    return;
  }
 
updateData(`/api/review/update/${updateReviewData._id}`,formData).then((response)=>{
 setProgress(60)
     fetchDataFromApi(`/api/review/getAll/${ProductId}`).then((res)=>{
      console.log(res);
      setProgress(80)
      setproductReviewData('');
setTimeout(() => {

  setproductReviewData(res.data)
  setReviewLength(res.data.length)
   setMsgOpen({
       status:true,
       color:'#7958b6',
       data:response.message
     })
     setDeleteLoading(false)
     setProgress(100)
     setOpen(false);
}, 1000);
     
       }).catch((err)=>{
      console.error('Error fetching product reviews:', err);
      setDeleteLoading(false)
setProgress(100)
         })
}).catch((err)=>{
   setMsgOpen({
       status:true,
       color:'#fa3e3e',
       data:"Can't update Review Please Try again later..."
     })
     setProgress(100)
     setDeleteLoading(false)
  console.log(err)
})

         
       
}

  const handleClose = () => {
    setOpen(false);
  
  };

  return (

      <Dialog

        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<div   className={`DeleteBestSellingProductDialog position-relative
DeleteBestSellingProductDialogUpdate
   DeleteBestSellingProductDialogLight`}>

    <div className={`DeleteBestSellingProductDialogTopIconDiv
    
         DeleteBestSellingProductDialogLight`}>
        <UpdateIcon/></div>
<h2>Are You Sure!</h2>
<h3>Want to delete this Product?</h3>
 <div className="Update-rating_ ">
              <Stack spacing={1}>
                <Rating
                  name="Ratting"
                  onChange={(event, value) => {
                  
                    setFormData(()=>({
                        ...formData,
                        [event.target.name]:value
                    }))
                  }}
                  defaultValue={formData.Ratting}
                  precision={1}
                />{" "}
              </Stack>
            </div>
<div className='  w-100'>
     <TextField
          id="outlined-multiline-static"
          name='Review'
          label="Update Your Review"
          onChange={(e)=>{changeInput(e)}}
          multiline
          fullWidth
          rows={4}
          defaultValue={formData.Review}
        />
</div>
<div className='mt-4 w-100 d-flex align-items-center justify-content-between'>
        <Button onClick={handleClose} className={`CancelBtn `} autoFocus>
          Cancel
        </Button>
        <Button onClick={()=>{DeletProDuctFunc();}} className={`DeleteBtn `} >
              {deleteLoading === true ? (
                  <CircularProgress className="Circular_Progress" />
                ) : (
                  " Update"
                )}
         
        </Button>
</div>
</div>

       
      </Dialog>
   
  );
}