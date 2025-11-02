import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../App';
import { jwtDecode } from "jwt-decode";
import { useEffect,useState } from 'react';

export function ProtectedRoute({ children }) {
  const Context = useContext(MyContext);
  const setShowHeaderFooter = Context.values.setShowHeaderFooter;
  const Token = localStorage.getItem('Token');
  const datenow = Math.floor(Date.now() / 1000);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (!Token || Token === 'undefined' || Token === '') {
      setShowHeaderFooter(false);
      setIsAuthenticated(false);
    } else {
      const decoded = jwtDecode(Token);
      if (decoded.exp < datenow) {
        localStorage.setItem('Token', '');
        localStorage.setItem('UserId', '');
        setShowHeaderFooter(false);
        setIsAuthenticated(false);
      } else {
        setShowHeaderFooter(true);
        setIsAuthenticated(true);
      }
    }
  }, [Token, setShowHeaderFooter,datenow]);

  if (isAuthenticated === null) {
    return null; // or a loading indicator
  }

  if (!isAuthenticated) {
   
    return <Navigate to="/LoginPage" replace />;
  }

  return children;
}





 