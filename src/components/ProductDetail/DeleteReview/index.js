import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import {useContext,useState } from 'react';
import {MyContext} from '../../../App'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
// import {deleteData, fetchDataFromApi} from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { deleteData ,fetchDataFromApi} from '../../../utils/api';



export default function DeleteDailoge() {
      const Context= useContext(MyContext);
      const[deleteLoading,setDeleteLoading]=useState(false)
        //  const LightMode= Context.values.LightMode;
         const open= Context.values.deleteReviewData
         const productReviewid= Context.values.productReviewid;;
            const setOpen= Context.values.setdeleteReviewData;
   const setMsgOpen=Context.values.setOpen;
            const setproductReviewData=Context.values.setproductReviewData;
             const setReviewLength=Context.values.setReviewLength;
             const Reviewproductid=Context.values.Reviewproductid;
     const setProgress=Context.values.setProgress
const DeletProDuctFunc=async()=>{
  setDeleteLoading(true)
  if (productReviewid===null || Reviewproductid===null){
    setDeleteLoading(false)
   setMsgOpen({
       status:true,
       color:'#fa3e3e',
       data:"Please Try again later..."
     })
     setOpen(false);
     setProgress(100)
     setDeleteLoading(false)
 return;
  }
deleteData(`/api/review/delete/One/${productReviewid}`).then((response)=>{
setProgress(60)
     fetchDataFromApi(`/api/review/getAll/${Reviewproductid}`).then((res)=>{
     
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
       data:"Can't Delete Review Please Try again later..."
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
 DeleteBestSellingProductDialogDelete
   DeleteBestSellingProductDialogLight`}>

    <div className={`DeleteBestSellingProductDialogTopIconDiv
         DeleteBestSellingProductDialogLight`}>
        <NewReleasesIcon/></div>
<h2>Are You Sure!</h2>
<h3>Want to delete this Product?</h3>

<div className='mt-4 w-75 d-flex align-items-center justify-content-around'>
        <Button onClick={handleClose} className={`CancelBtn `} autoFocus>
          Cancel
        </Button>
        <Button onClick={()=>{DeletProDuctFunc();}} className={`DeleteBtn `} >
              {deleteLoading === true ? (
                  <CircularProgress className="Circular_Progress" />
                ) : (
                  " Delete"
                )}
         
        </Button>
</div>
</div>

       
      </Dialog>
   
  );
}