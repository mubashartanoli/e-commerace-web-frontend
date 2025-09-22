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
import GoogleLogIn from '../GoogleLogInBtn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import {  postData } from '../../utils/api.jsx';
import FormControl from '@mui/material/FormControl';
// import { useNavigate } from 'react-router-dom';
import { useContext ,useState} from "react";
import { MyContext } from '../../App';
import env from 'react-dotenv';
import background from '../../images/pattern.webp'
const clientId = "437948893730-g9ab5skpep3ep575j0cgm14k6fadm1n0.apps.googleusercontent.com";
const TYPE = env.TYPE;
const LoginComp =()=>{
 const Context=useContext(MyContext)
    const setProgress=Context.values.setProgress;
    const setIslogin=Context.values.setIslogin;
    const setOpen=Context.values.setOpen;
  // const navigate=useNavigate()
  const [isLoading,setIsLoading]=useState(false);
  const {
  register,
  handleSubmit,
  
  formState: { errors},
} = useForm()

  const onSubmit =async(data) => {
    setIsLoading(true)
setProgress(25);
    console.log(data);
postData('/api/auth/signIn',{data ,accountType:TYPE}).then((res)=>{
 setProgress(75)
 setIslogin(true)
localStorage.setItem('Token',res.token);
localStorage.setItem('UserId',res.data._id);
setOpen({
       status:true,
       color:'#7958b6',
       data:'You Can SignIn Sucessfully'
     })
setTimeout(() => {
  setIsLoading(false)
setProgress(100)
  window.location.href='/'
}, 1500);

})
.catch((error)=>{
  setIsLoading(false)
  setOpen({
       status:false,
       color:'#fa3e3e',
       data:'Err Contain, Please Check Your Email & Password Or Try Again'
     })
setProgress(100)
  console.log(error)
  })
     
  }
  
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
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
          <h1>SIGN IN</h1>
     
        
        <div className='Form w-100'>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      
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
 
      <div className='Forget-Password'><Link to="/ForgetPassword">Forget Password?</Link></div>
    <Button className='Submit'><input disabled={isLoading} className='Submit_btn' type="Submit" value={isLoading ? "Signining..": "Sign In"} /></Button>

    </Box>
            {/* </form> */}
            </div>

           <div className='Already-Register'>Don't Have An Account? <Link to={'/SignupPage'} >Sign Up</Link></div>
           <div className='continue-with-social'>
            <span>Or sign In with social account </span>
           </div>
           <div className='google-login-btn w-100'>
             {/* <Button >
              <img height='20px' src={googleicon} alt="" />
              <span> SIGN In With Google</span>
             </Button> */}
             <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogIn />
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
        {errors.password && <div className='required-Error-div'>Password must contain one uppercase letter, one special character, and one number. and min length is eight.</div>}
{errors.email && <div className='required-Error-div'>Invalid email address</div>}
       </div>

    </>)
}
export default LoginComp;