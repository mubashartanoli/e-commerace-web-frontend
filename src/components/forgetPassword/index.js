
import Logo from '../../images/wolf.png'
import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form"
// import { useState } from 'react';


const ForgetPassword =()=>{
      // eslint-disable-next-line no-undef
     

  const {
  register,
  handleSubmit,
  // watch,
  formState: { errors,isSubmitting},
  } = useForm()
  const delay = async (d)=>{
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d *1000);
    });
  }
  const onSubmit =async(data) => {
    // eslint-disable-next-line no-undef

     let r= await fetch('http://localhost:4000/login/',{ 
     method: "POST",

  headers: {"Content-Type": "application/json",},

  body: JSON.stringify(data),
})

  let res= await r.text()
    await delay(1)
    console.log(data,res)
}
  
    return(<>
        <div className="SignUpForm container-fluid">
        <div className='SignUpFormWapper'>
          <div className='logo_Wrapper d-flex align-items-center justify-content-center'>
        <div className='logo d-flex align-items-center'>
           <img height={'100%'} src={Logo} alt="Logo" />
           </div>
         
           </div>
          <h1>RESET PASSWORD</h1>
     
        
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

     
     <TextField id="standard-basic" label="Phone Number"  variant="standard" {...register("PhoneNumber",{ required: true ,minLength:10, })} className='w-100 mt-0 ' />
        
    
    

    <Button className='Submit'><input disabled={isSubmitting} className='Submit_btn' type="Submit" value={isSubmitting ? "PROCESSING...": "GET LINK"} /></Button>
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
{errors.PhoneNumber && <div className='required-Error-div'>PhoneNumber field is required.</div>}
{errors.email && <div className='required-Error-div'>Invalid email address</div>}
       </div>

    </>)
}
export default ForgetPassword;