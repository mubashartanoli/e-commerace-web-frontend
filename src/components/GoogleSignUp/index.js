
import React from 'react';
import Button from '@mui/material/Button';
import googleicon from "../../images/google icon png.png"
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import env from 'react-dotenv';
import { postData } from '../../utils/api';
import { useContext ,useState} from 'react';
import { MyContext } from '../../App';
import CircularProgress from "@mui/material/CircularProgress";



const GoogleSignUp=() =>{
  const TYPE = env.TYPE;
 const Context=useContext(MyContext)
 const setOpen=Context.values.setOpen;
  const setIslogin=Context.values.setIslogin;
  const setProgress=Context.values.setProgress;

const [loading,setloading]=useState(false)


const login= async()=>{
  setloading(true)
  setProgress(25)
await signInWithPopup(auth,googleProvider).then((result) => {
   const user = result.user;
    const formData={
      'picture':user.photoURL,
      'username':user.displayName,
       'email':user.email,
         'contact':user.phoneNumber,
         'accountType':TYPE,
         'accountStatus':user.emailVerified

    }
// console.log('formData',user)
postData('/api/auth/signInWithGoogle',formData).then((res)=>{
  if(res.success===false){
    setProgress(100)
setloading(false)
    setOpen({
      status:true,
      color:'#fa3e3e',
      data:res.message
    })
    return;
  }
  setProgress(70)
 

setOpen({
       status:true,
       color:'#7958b6',
       data:res.message
     })
     setTimeout(() => {
      localStorage.setItem('Token',res.token);
localStorage.setItem('UserId',res.data._id);
 setIslogin(true)
setloading(false)
setProgress(100)
  window.location.href='/'
}, 1000);
}).catch((err)=>{
  setloading(false)
  setProgress(100)
    setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Network Err Please Try Again Later..'
     })
})
  }).catch((error) => {
    setloading(false)
      setOpen({
       status:true,
       color:'#fa3e3e',
       data:'Network Err Please Try Again Later..'
     })
 console.log(error)
  });

}


  return (
 <div className='google-login-btn w-100'>

<Button disabled={loading===true} onClick={login}>
<img height='30px' src={googleicon} alt="" />
{
  loading===true?<CircularProgress/>:
<span> Sign In With Google</span>
}
</Button>



</div>
  );
}

export default GoogleSignUp;