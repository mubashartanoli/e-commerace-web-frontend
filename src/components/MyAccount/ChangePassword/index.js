import { useContext ,useState} from "react";
import { MyContext } from '../../../App';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useForm } from "react-hook-form"
import {useNavigate }from "react-router-dom";
import { postData } from "../../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";


const ChangePassword=()=>{
  const navigate=useNavigate();
     const Context=useContext(MyContext);
// const LightMode=Context.values.LightMode;
  const [showPassword, setShowPassword] = useState(false);
  const [NewshowPassword, setNewShowPassword] = useState(false);
  const [ConfirmshowPassword, setConfiemShowPassword] = useState(false);
const [focused, setFocused] = useState(false);
const [Newfocused, setNewFocused] = useState(false);
const [Confirmfocused, setConfirmFocused] = useState(false);
const [Loading, setLoading] = useState(false);
const setOpen=Context.values.setOpen;
const setProgress=Context.values.setProgress;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleNewShowPassword = () => setNewShowPassword((show) => !show);
  const handleConfirmShowPassword = () => setConfiemShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };


  
  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpNewPassword = (event) => {
    event.preventDefault();
  };


  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpConfirmPassword = (event) => {
    event.preventDefault();
  };


const UserId=localStorage.getItem('UserId');
const onSubmit=(data)=>{
setProgress(25)

setLoading(true)
  console.log(data);
  if(UserId==='null' || UserId===undefined || UserId===''){
    setProgress(100)
    setLoading(false)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Please Login , first'
     })
navigate('/LoginPage')
    return;
  }
  postData(`/api/auth/changePassword/${UserId}`,
  {oldPassword:data.oldPassword,
    newPassword:data.newPassword}).then((res)=>{
      if(res.success===false){
          setOpen({
       status:true,
       color:'#fa3e3e',
       data:res.message
     })
         
 
          setLoading(false)
      setProgress(100)
    return;
      }
     
      setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
      setLoading(false)
      setProgress(100)
    // console.log(res)
  }).catch((err)=>{
    console.log(err)
    setProgress(100)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Network error Please Try Again...'
     })
    
   
setLoading(false)  })
}
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors},
  } = useForm()
  const password = watch('newPassword');
    return(
        <>
           <div className="ChangePassword w-100 p-4 mt-4">
{/* heading */}
        <div className="ChangePasswordTop  d-flex align-items-center justify-content-between">
            <h6 className={`MyAccountTopBtnLight`}>Change Password</h6>
           <div className=" col-sm-10"> <hr/></div>
        </div>
{/* heading */}
    <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit(onSubmit)}
    > 
<div className="row">
    {/* Current password */}

   <div className={`col-sm-12 InputDiv 
    InputDivLight`}>
     <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
             variant="standard"  {...register("oldPassword",{ required: true,minLength:8 ,  pattern: {
            value:  /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
}})}  


            name="oldPassword"
            type={showPassword ? 'text' : 'password'}
              startAdornment={
      <InputAdornment position="start">
        <EnhancedEncryptionIcon />
      </InputAdornment>
    }
    endAdornment={
        focused===true &&
      <InputAdornment position="end">
        <IconButton
          aria-label={showPassword ? 'hide the password' : 'display the password'}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          onMouseUp={handleMouseUpPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}

            placeholder="Current Password..."
          />
        </FormControl>
   </div>
 {/* Current password end*/}
  {/* new password end */}
  <div className={`col-sm-6 InputDiv
  InputDivLight'`}>
     <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"

name='newPassword'
             variant="standard"  {...register("newPassword",{ required: true,minLength:8 ,  pattern: {
            value:  /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
}})}  
           type={NewshowPassword ? 'text' : 'password'}
              startAdornment={
      <InputAdornment position="start">
        <AddModeratorIcon />
      </InputAdornment>
    }
    endAdornment={
       Newfocused===true &&
      <InputAdornment position="end">
        <IconButton
          aria-label={showPassword ? 'hide the password' : 'display the password'}
          onClick={handleNewShowPassword}
          onMouseDown={handleMouseDownNewPassword}
          onMouseUp={handleMouseUpNewPassword }
          edge="end"
        >
          {NewshowPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
onFocus={() => setNewFocused(true)}
    onBlur={() => setNewFocused(false)}

            placeholder="New Password..."
          />
        </FormControl>
   </div>
     {/* new password end */}
     {/* Confirm password  */}
     <div className={`col-sm-6 InputDiv
InputDivLight`}>
     <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={ConfirmshowPassword? 'text' : 'password'}
   
            name="confirmPassword"
   {...register('confirmPassword', {
      required: true,
      validate: (value) => value === password || 'Passwords do not match',
    })}
              startAdornment={
      <InputAdornment position="start">
        < VerifiedUserIcon />
      </InputAdornment>
    }
    endAdornment={
        Confirmfocused===true &&
      <InputAdornment position="end">
        <IconButton
          aria-label={showPassword ? 'hide the password' : 'display the password'}
          onClick={handleConfirmShowPassword}
          onMouseDown={ handleMouseDownConfirmPassword }
          onMouseUp={ handleMouseUpConfirmPassword }
          edge="end"
        >
          {ConfirmshowPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
onFocus={() => setConfirmFocused(true)}
    onBlur={() => setConfirmFocused(false)}

            placeholder="Confirm Password..."
          />
        </FormControl>
   </div>
     {/* Confirm password end */}

</div>

<div className="mt-5 SubmitBtnDiv">
    <Button type="Submit" disabled={Loading}> <VerifiedIcon/> 
        {Loading === true ? (
                  <CircularProgress className="Circular_Progress" />
                ) : (
                  " SAVE CHANGES"
                )}
                
   </Button>
</div>
</Box>
    </div>
       {errors.confirmPassword && <div className='required-Error-div'>Confirm Password Is Incorrect </div>}
       {errors.newPassword && <div className='required-Error-dive'>New Password must contain one uppercase letter, one special character, and one number. and min length is eight.</div>}
       {errors.oldPassword && <div className='required-Error-div'>Password must contain one uppercase letter, one special character, and one number. and min length is eight.</div>}
        </>
    )
}
export default ChangePassword;