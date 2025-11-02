
import { useContext, useEffect } from "react";
import { MyContext } from '../../App';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import accountimg from '../../images/AccountImage.png'
import FormControl from '@mui/material/FormControl';
import ChangePassword from './ChangePassword';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CircularProgress from "@mui/material/CircularProgress";
import { postData,fetchDataFromApi } from "../../utils/api";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const MyAccount =()=>{
    const Context=useContext(MyContext);
        const UserData=Context.values.UserData;
        const setUserData=Context.values.setUserData;
        const setOpen=Context.values.setOpen;
const setProgress=Context.values.setProgress;
const [loading,setloading]=useState(false)
const [active,setActive]=useState(1);
const [Data,setData]=useState({
  Name:'',
  contact:'',
  Email:'',
  picture:''

});

useEffect(()=>{
if(UserData!==null){
  // console.log(UserData)
  setData({
      Name:UserData.username,
  contact:UserData.contact,
  Email:UserData.email,
  picture:UserData.picture?UserData.picture:''
  })
}
},[UserData])

const UserId=localStorage.getItem('UserId')
const formData= new FormData();
const uploadImg=(e)=>{
   e.preventDefault()
  setProgress(25)
setloading(true)
 formData.append('image', e.target.files[0]);
  postData(`/api/auth/upload/img/${UserId}`,formData).then((res)=>{
    setProgress(70)
    fetchDataFromApi(`/api/auth/get/user/${UserId}`).then((Response)=>{
      setUserData(Response.data)
       setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
 
    setloading(false)
    setProgress(100)
    }).catch((err)=>{
    setProgress(100)
    setloading(false)
    console.log(err)
          setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Network Err Please Refresh...'
     })
   
    return;
  })
  
  }).catch((err)=>{
    setProgress(100)
    setloading(false)
    console.log(err)
          setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Network Err Please Try Again...'
     })
  
  })
}

return(
  <>
 <div className=" container">
<div className="MyAccountTop">
<Button className={active===1 &&'MyAccountTopBtnActive'} onClick={()=>{setActive(1)}}>Profile Info</Button>
<Button className={active===2 &&'MyAccountTopBtnActive'} onClick={()=>{setActive(2)}}>ChangePassword</Button>
</div>
{
  active===1 &&
  <div className='Profile-Info'>
<div className='Img-Side'>
  <div className=' d-flex flex-column align-items-center justify-content-center'
   style={{width:'200px'}}>
    
  <div className='Img-Wapper'>
    {
      Data.picture!==''?
        <LazyLoadImage
      src={Data.picture} alt={Data.picture}
     loading="lazy"
      width={'100%'} />
    : 
    <LazyLoadImage src={accountimg} alt="img" width={'100%'}/>
    }
  </div>
  <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
       {loading===true?
     <CircularProgress className="Circular_Progress" />
    : 'Upload files'}
      <VisuallyHiddenInput
        type="file"
        onChange={uploadImg}
     
      />
    </Button>
</div></div>


<div className='Info-Side'>
   <FormControl fullWidth sx={{ m: 1 }}>
          
          <OutlinedInput
         
             placeholder="Your Name..."
         defaultValue={Data.Name}
            label="Amount"
             readOnly
          />
        </FormControl>
   <FormControl fullWidth sx={{ m: 1 }}>
     
          <OutlinedInput
         
             placeholder="Your Contact..."
         defaultValue={Data.contact}
            label="Amount"
             readOnly
          />
        </FormControl>
   <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
         
             placeholder="Your email..."
         defaultValue={Data.Email}
            label="Amount"
            readOnly
          />
        </FormControl>
</div>
</div>
}

{
  active===2&& <ChangePassword/>
}

 </div>
  </>
)
}
export default MyAccount;