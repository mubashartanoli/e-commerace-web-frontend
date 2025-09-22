import Logo from '../../images/wolf.png'
import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
// import googleicon from "../../images/google icon png.png"
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form"
import { GoogleOAuthProvider} from '@react-oauth/google';
import { useState} from "react";
import GoogleSignUp from '../GoogleSignUp';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import {  postData } from '../../utils/api.jsx';
// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {MyContext} from '../../App'
import background from '../../images/pattern.webp'
import env from 'react-dotenv';
const TYPE = env.TYPE;


const clientId = "437948893730-g9ab5skpep3ep575j0cgm14k6fadm1n0.apps.googleusercontent.com";






const SignupComp =()=>{
  const Context=useContext(MyContext)
    const setProgress=Context.values.setProgress;
    const setIslogin=Context.values.setIslogin;
    const setOpen=Context.values.setOpen;
const [isLoading,setIsLoading]=useState(false);


//  const navigate=useNavigate()
const {
register,
handleSubmit,
watch,
formState: { errors},
} = useForm()



const onSubmit =async(data) => {
  setIsLoading(true)
setProgress(30)
    console.log(data);
postData('/api/auth/signUp',{data ,accountType:TYPE}).then((res)=>{
 console.log(res.data)
localStorage.setItem('UserId',res.data._id);
localStorage.setItem('Token',res.token);
setProgress(75)
setIslogin(true);
setOpen({
       status:'true',
       color:'#7958b6',
       data:'You Can SignUp Sucessfully'
     })
setTimeout(() => {
   setIsLoading(false)
  setProgress(75)
 window.location.href='/'
}, 2000);


})
 .catch((error)=>{
  setProgress(100)
  setOpen({
       status:true,
       color:'#fa3e3e',
       data:'They Have Some Err To Register You Please Try Adain Later.'
     })
    setIsLoading(false)
  console.log(error)
  })

}

const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
const password = watch('password');
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

return(<>
  <div className='BackGround-Image'>
    <img src={background} alt="background" />
  </div>
<div className="SignUpForm container-fluid">
<div className='SignUpFormWapper'>
    <div className='logo_Wrapper d-flex align-items-center justify-content-center'>
         <div className='logo d-flex align-items-center'>
           <img height={'100%'} src={Logo} alt="Logo" />
           </div>
         
           </div>
<h1>SIGN UP</h1>


<div className='Form w-100'>
{/* <form onSubmit={handleSubmit(onSubmit)}> */}
<Box
component="form"
sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
noValidate
autoComplete="off"
onSubmit={handleSubmit(onSubmit)}
>
<div className='flex-div  w-100'> 
<TextField id="standard-basic" label="Full Name" variant="standard"   {...register("username",{ required: true ,minLength:4})}  className='  mt-0 ' />




<TextField id="standard-basic" label="Phone Number"  variant="standard"  {...register("contact",{ required: true ,minLength:10, })} className=' mt-0 ' />
</div>

<TextField id="standard-basic" label="Email" type="email" variant="standard"        {...register('email', {
          required: 'Email is required',
         minLength:8,

          pattern: {
            value:   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          
          },
        })}
 className='w-100 mt-0  ' />

 <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            // className='w-100  '
            type={showPassword ? 'text' : 'password'}
             variant="standard"  {...register("password",{ required: true,minLength:8 ,  pattern: {
            value:  /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
}})}  
            endAdornment={
              <InputAdornment position="end">
                <IconButton 
               
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                 
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>

              </InputAdornment>
            }
          />
        </FormControl>
 

 <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input
           
           id="standard-adornment-confirm-password"
    type={showConfirmPassword ? 'text' : 'password'}
    variant="standard"
    {...register('confirmPassword', {
      required: true,
      validate: (value) => value === password || 'Passwords do not match',
    })}



            endAdornment={
                   <InputAdornment position="end">
                <IconButton 
                
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                 
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>

              </InputAdornment>
            }
          />
        </FormControl>

<Button className='Submit'><input className='Submit_btn' disabled={isLoading} type="Submit" value={isLoading ? "Creating..": "Create Account"} /></Button>
</Box>
{/* </form> */}
</div>

<div className='Already-Register'>Already Register? <Link to={'/LoginPage'} >Login</Link></div>
<div className='continue-with-social'>
<span>Or continue with social account </span>
</div>
<div className='google-login-btn w-100'>

{/* <Button >
<img height='30px' src={googleicon} alt="" />
<span> Sign Up With Google</span>
</Button> */}
     {/* google login button */}
<GoogleOAuthProvider clientId={clientId}>
      <GoogleSignUp />
    </GoogleOAuthProvider>



</div>
  <div className='Back-To-HomePage'>
    <Button>
      <Link to={"/"} >
      <MdOutlineClose className='Back-To-HomePage-Svg'/>
      </Link>
    </Button>
  </div>
</div>
{errors.confirmPassword && <div className='required-Error-div'>confirm password is incorrect</div>}
{errors.password && <div className='required-Error-div'>Password must contain one uppercase letter, one special character, and one number. and min length is eight.</div>}
{errors.email && <div className='required-Error-div'>Invalid email address</div>}
{errors.contact && <div className='required-Error-div'>PhoneNumber field is required.</div>}
{errors.username && <div className='required-Error-div'>UserName field is required and his minimum length is Four.</div>}
</div>

</>) 
}
export default SignupComp;