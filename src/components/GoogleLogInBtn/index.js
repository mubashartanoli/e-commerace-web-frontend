

import React from 'react';
import Button from '@mui/material/Button';
import googleicon from "../../images/google icon png.png"
import { useGoogleLogin } from '@react-oauth/google';



const GoogleLogInBtn=() =>{
  const login = useGoogleLogin({
    onSuccess:  async (codeResponse) => {
     console.log (codeResponse)
    },
    onError: (err) => {console.log(err)},
    flow: 'auth-code',
  });

  return (
 <div className='google-login-btn w-100'>

<Button onClick={login}>
<img height='30px' src={googleicon} alt="" />
<span> Sign In With Google</span>
</Button>



</div>
  );
}

export default GoogleLogInBtn;
