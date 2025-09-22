import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../App';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
export function ProtectedRoute({ children }) {
  const Context=useContext(MyContext);
  const setShowHeaderFooter=Context.values.setShowHeaderFooter
  const Token=localStorage.getItem('Token')


 useEffect(() => {
    if (!Token || Token === 'undefined' || Token === '') {
      setShowHeaderFooter(false);
    } else {
      setShowHeaderFooter(true); // You might want to set it to true if the token is valid
    }
  }, [Token, setShowHeaderFooter]);


  if (!Token || Token === 'undefined' || Token === '' ) {


   
    return <Navigate to="/LoginPage" replace />;
  }
        const decoded = jwtDecode(Token);
 
const datenow=Math.floor(Date.now()/1000)
// const timeLeft=decoded.exp - datenow;
// const minutesLeft = Math.floor(timeLeft / 60);
// const hoursLeft = Math.floor(timeLeft / 3600);
// const daysLeft = Math.floor(timeLeft / 86400);

// console.log(`Time left: ${minutesLeft} minutes, ${hoursLeft} hours, ${daysLeft} days`);


if(decoded.exp<datenow){
localStorage.setItem('Token','');
localStorage.setItem('UserId','');

return <Navigate to="/LoginPage" replace />;
}else{

  return children;
}





}
 