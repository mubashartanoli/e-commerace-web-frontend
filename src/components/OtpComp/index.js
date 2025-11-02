import Logo from '../../images/wolf.png'
import  React from 'react';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
// import googleicon from "../../images/google icon png.png"
import { MdOutlineClose } from "react-icons/md";
import { useState,useRef} from "react";
// import {  postData } from '../../utils/api.jsx';
// import { useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import {MyContext} from '../../App.js'
import background from '../../images/pattern.jpg';
import Tablet from '../../images/patternForTablet.jpg';
import Phone from '../../images/patternForPhone.jpg';
import { postData } from '../../utils/api.jsx';
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from 'react-router-dom';






const OtpComp =()=>{
   const navigate=useNavigate()
  const Context=useContext(MyContext)
    const setProgress=Context.values.setProgress;
    const setOpen=Context.values.setOpen;
const UserEmail =localStorage.getItem('UserEmail')
const isAction =localStorage.getItem('isAction')
const OTPEXP =localStorage.getItem('OTPEXP')
  const [isLoading,setIsLoading]=useState(false);
  const [reLoading,setReLoading]=useState(false);
 const [time, setTime] = useState();
const [otp, setotp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

useEffect(() => {
  if (OTPEXP ===undefined ||OTPEXP ===null ||OTPEXP===''){
    return
  }
  // console.log(OTPEXP)
  const FuturTime=new Date(OTPEXP)
  setTime(FuturTime-600000)
setTime(FuturTime- Date.now());
    const intervalId = setInterval(() => {
      const remainingTime = FuturTime - Date.now();

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setTime(0);
      } else {
        setTime(remainingTime);
      }
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [OTPEXP]);



  const handleKeyDown = (event, index) => {
    // console.log(event.key)
    if (event.key === 'Enter'||event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
      }
      return
    }
    if(event.key === 'ArrowLeft'){
       const previousIndex = index - 1;
  if (previousIndex >= 0) {
      inputRefs.current[previousIndex].focus();
     
    
      inputRefs.current[previousIndex].setSelectionRange(2, 2)
    }
   
  };


  };

  const handleInput = (event, index) => {
    
    const newValue = event.target.value;
  
    if (isNaN(newValue)) {
          setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Enter Number Only...'
     })
  return;
}
    const newValues = [...otp];
    newValues[index] = newValue;
    setotp(newValues);
    if(newValue!==''){
      const nextIndex = index + 1;
      if (nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex].focus();
    }}else    if(newValue===''){
       const previousIndex = index - 1;
  if (previousIndex >= 0) {
      inputRefs.current[previousIndex].focus();
      const inputLength = inputRefs.current[previousIndex].value.length;
    
      inputRefs.current[previousIndex].setSelectionRange(inputLength, inputLength);
    }
  } 
  };

  const handlePaste = (event, index) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('text').trim().slice(0, 6);
    
        if (isNaN(pastedValue)) {
          setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Enter Number Only...'
     })
  return;
}
    const values = pastedValue.split('');

    values.forEach((value, i) => {
      if (index + i < inputRefs.current.length) {
        inputRefs.current[index + i].value = value;
      }
    });

    const newValues = [...values];
    while (newValues.length < 6) {
      newValues.push('');
    }
    setotp(newValues.slice(0, 6));

    const nextIndex = Math.min(index + pastedValue.length, inputRefs.current.length - 1);
    inputRefs.current[nextIndex].focus();
  };

  const resend=()=>{
   
    setReLoading(true);
    setProgress(25)
    postData('/api/auth/resendOTP',{email:UserEmail}).then((res)=>{
  if(res.success===false ){
      setReLoading(false)
  setOpen({
       status:true,
       color:'#fa3e3e',
       data:res.message
     })
setProgress(100)
return;
  }
  localStorage.setItem('OTPEXP',res.OTPEXP);
  setProgress(75)
  setTimeout(() => {
    setReLoading(false)
    setProgress(100);
  }, 1000);
    }).catch((err)=>{
       console.log(err);
   setOpen({
       status:true,
       color:'#fa3e3e',
       data:'NetWork Err Please Try Again Later...'
     })
     setReLoading(false)
  setProgress(100)
    })
  }

const submit=()=>{
  setIsLoading(true)
  setProgress(25)
 const String=otp.join('');
 if(UserEmail===null ||UserEmail===""){
        setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Register First...'
     })
     setIsLoading(false)
  setProgress(100)
     return;
 }
 if(isAction===null ||isAction===""){
        setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Register Or Login First...'
     })
     setIsLoading(false)
  setProgress(100)
     return;
 }
 if(String===''){
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Enter Otp...'
     })
     setIsLoading(false)
  setProgress(100)
     return;
 }


 postData('/api/auth/verifyEmail',{email:UserEmail,Otp:String,isAction:isAction}).then((res)=>{
 

if(res.success===false){
   setOpen({
       status:true,
       color:'#fa3e3e',
       data:res.message
     })
     setIsLoading(false)
  setProgress(100)
     return;
}
localStorage.removeItem('OTPEXP')


setIsLoading(true)
setProgress(75)
setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
     if(isAction==='Reset Password'){
      setTimeout(() => {
  setIsLoading(false)
setProgress(100)
  navigate('/EnterNewPassword')
}, 1500);
return;
     }
setTimeout(() => {
  setIsLoading(false)
setProgress(100)
   navigate('/LoginPage')
}, 1500);
 }).catch((err)=>{
  console.log(err);
   setOpen({
       status:true,
       color:'#fa3e3e',
       data:'NetWork Err Please Try Again Later...'
     })
     setIsLoading(false)
  setProgress(100)
 })

 
};
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
 
return(<>
  <div className='BackGround-Image'>
    <picture>
      <source media="(max-width: 450px)" srcSet={Phone} />
      <source media="(max-width: 800px)" srcSet={Tablet}/>
      <img src={background} alt='Background img'/>
    </picture>
  </div>
<div className="SignUpForm container-fluid">
<div className='SignUpFormWapper'>
  
    <div className='logo_Wrapper d-flex align-items-center justify-content-center'>
         <div className='logo d-flex align-items-center'>
           <img height={'100%'} src={Logo} alt="Logo" />
           </div>
         
           </div>
<div className='OtpVerificationDiv'>
  <h2>OTP Verification</h2>
  <h5>OTP has been sent to</h5>
  <h3>{UserEmail!==null && UserEmail!==''&&UserEmail}</h3>
    <div className='Otptimmer'>
      <p>Time Remaning: {`${!minutes?'00': minutes.toString().padStart(2, '0')}
      :${!seconds?'00':seconds.toString().padStart(2, '0')}`}</p>
      {time <= 0 && <p>Time's up!</p>}
    </div>
  <div className='OTPINPUT'>
    {
      otp.map((value,index)=>{
       
        return(
<input
autoFocus={index===0}
id={`input_${index}`}
className='otp_input'
key={index}
  type="text"
  value={value}
  ref={(ref) => (inputRefs.current[index] = ref)}
  onKeyDown={(event) => handleKeyDown(event, index)}
  onChange={(event) => handleInput(event, index)}
onPaste={(event) => handlePaste(event, index)}
 maxLength={1}
/>
        )
      })
    }

  </div>

<Button
disabled={isLoading}
onClick={submit}
className='OTPBtn OTPSUB'>
  {isLoading===true?<CircularProgress/>:'Submit'
}</Button>
<Button
disabled={reLoading}
onClick={()=>resend()}
className='OTPBtn OTPRE'>
  {reLoading===true?<CircularProgress/>:'Resend OTP'
}</Button>
</div>





  <div className='Back-To-HomePage'>
    <Button>
      <Link to={"/"} >
      <MdOutlineClose className='Back-To-HomePage-Svg'/>
      </Link>
    </Button>
  </div>
</div>

</div>

</>) 
}
export default OtpComp;