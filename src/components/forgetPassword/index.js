
import Logo from '../../images/wolf.png'
import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form"
import { useState ,useContext} from 'react';
import {MyContext} from '../../App.js'
import { postData } from '../../utils/api';
import background from '../../images/pattern.jpg';
import Tablet from '../../images/patternForTablet.jpg';
import Phone from '../../images/patternForPhone.jpg';



const ForgetPassword =()=>{
  const navigate=useNavigate()
    const Context=useContext(MyContext)
    const setProgress=Context.values.setProgress;
    const setOpen=Context.values.setOpen;
  const [reLoading,setReLoading]=useState(false);
     

  const {
  register,
  handleSubmit,
  formState: { errors},
  } = useForm()

  const onSubmit =async(data) => {
    setReLoading(true);
    setProgress(25)
    console.log(data.email);
localStorage.setItem('UserEmail',data.email)
    postData('/api/auth/resendOTP',data).then((res)=>{
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
  localStorage.setItem('isAction','Reset Password');
  setProgress(75)
  setTimeout(() => {
    setReLoading(false)
    setProgress(100);
    navigate('/VerifyOtp')
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
          <h1>Enter Your Email </h1>
     
        
        <div className='Form w-100'>
            
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
     autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      
    <TextField id="standard-basic" label="Email" type="email" variant="standard"    

            {...register('email', {
              required: 'Email is required',
             
    
              pattern: {
                value:   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              
              },
            })}
     className='w-100 mt-0  ' />

     
 
    

    <Button className='Submit' disabled={reLoading} type="Submit">
      {reLoading ? "PROCESSING...": "GET LINK"}
    </Button>
    </Box>
     
            
            </div>

           <div className='Already-Register'>remember the password? <Link to={'/LoginPage'} >Log In</Link></div>
          
         

                  <div className='Back-To-HomePage'>
                    <Button>
                      <Link to={"/"} >
                      <MdOutlineClose className='Back-To-HomePage-Svg'/>
                      </Link>
                    </Button>
                  </div>
        </div>

{errors.email && <div className='required-Error-div'>Invalid email address</div>}
       </div>

    </>)
}
export default ForgetPassword;