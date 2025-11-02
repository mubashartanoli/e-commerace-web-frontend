
import Logo from '../../images/wolf.png'
import  React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import { useForm } from "react-hook-form"
import { useState ,useContext} from 'react';
import {MyContext} from '../../App.js'
import { postData } from '../../utils/api.jsx';
import background from '../../images/pattern.jpg';
import Tablet from '../../images/patternForTablet.jpg';
import Phone from '../../images/patternForPhone.jpg';
import { useNavigate } from 'react-router-dom';


const NewPass =()=>{
  const navigate=useNavigate()
    const Context=useContext(MyContext)
    const setProgress=Context.values.setProgress;
    const setOpen=Context.values.setOpen;
    const UserEmail =localStorage.getItem('UserEmail')
const isAction =localStorage.getItem('isAction')
  const [reLoading,setReLoading]=useState(false);
     
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const {
  register,
  handleSubmit,
  formState: { errors},
  } = useForm()

  const onSubmit =async(data) => {
    setReLoading(true);
    setProgress(25)

 if(UserEmail===null ||UserEmail===""||UserEmail===undefined||
  isAction===null ||isAction===""||isAction===undefined||isAction!=="Reset Password"){
        setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Back And Enter Email First...'
     })
     setReLoading(false)
  setProgress(100)
     return;
 }
    console.log(data.password);
    postData('/api/auth/ResetPassword',{isAction,email:UserEmail,Password:data.password}).then((res)=>{
 console.log(res);
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
   setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
  setTimeout(() => {
    setReLoading(false)
    setProgress(100);
    navigate('/LoginPage')
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
          <h1>Enter New PASSWORD</h1>
     
        
        <div className='Form w-100'>
            
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
     autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      
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
 {errors.password && <div className='required-Error-div'>
  Password must contain one uppercase letter, one special character, and one number. and min length is eight.</div>}
       </div>

    </>)
}
export default NewPass;