import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './responsive.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgetPassword from "./Pages/forgetPassPage";
import ProductDetailPage from './Pages/ProductDetailPage';
import Cart from './Pages/Cart';
import Footer from './components/Footer';
import Coupendiv from './components/Coupendiv';
import Header from "./components/Header";
import CatSideBar from './components/CatSideBar';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import CartDiv from './components/CartDiv';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from 'react-top-loading-bar';

import {fetchDataFromApi} from './utils/api';
import { ProtectedRoute } from './utils/ProtectedRoute';


const MyContext = createContext();

function App() {

   const [progress, setProgress] = useState(0);
  const [mobileResize,setMobileResize]=useState(false);
  const [mobilesize,setMobilesize]=useState(4);
  const [ShowCartInMobile,setShowCartInMobile]=useState(5);

        const [islogin, setIslogin] = useState(false);
       const [showTopBtn, setShowTopBtn] = useState(false);  
       const [ShowSideBar,setShowSidebar]=useState(false);
       const [ShowFilterProduct,setShowFilterProduct]=useState(false);
       const [ShowProductCatagoryDiv,setShowProductCatagoryDiv]=useState(false);
       const [allCatagory,setAllCatagory]=useState([]);
       const [allSubCatagory,setAllSubCatagory]=useState([]);
       const [allProduct,setAllProduct]=useState([]);
       const [Rowvalue,setRowvalue]=useState(4);
       const [PageValue,setPageValue]=useState(1);
       const [ProductData,setProductData]=useState([]);
       const [CatagoryId,setCatagoryId]=useState(null);
const [featuredProduct,setFeaturedProduct] = useState([]);
const [newProduct,setNewProduct] = useState([]);
const [BrandId,setBrandId] = useState('All');
const [AllBrand,setAllBrand] = useState([]);
  const [stockCheck,setstockCheck] = useState(null);
      const[FilterPriceValue, setFilterPriceValue] = useState([1, 10000]);
      const[SubCatagoryId, setSubCatagoryId] = useState('All');
      const[ProductDetailPopupId, setProductDetailPopupId] = useState(null);
     const [open,setOpen]=useState({
       status:false,
       color:'#ffffff00',
       data:''
     })
     const [CountryList, setCountryList] = useState([]);
     const[showCart ,setShowCart]=useState(false);
     const [ShowHeaderFooter, setShowHeaderFooter] = useState(true);
     useEffect(()=>{
   
      getCountry('https://countriesnow.space/api/v0.1/countries/')
     },[])

  const values={
    CountryList,
    setShowCart,
    showCart,
    ShowHeaderFooter,
    setShowHeaderFooter,
    open,setOpen,
    islogin, setIslogin,
    showTopBtn, setShowTopBtn,
    ShowSideBar,setShowSidebar,
    mobileResize,setMobileResize,
    ShowFilterProduct,setShowFilterProduct,
    mobilesize,setMobilesize,
    ShowCartInMobile,setShowCartInMobile,
    ShowProductCatagoryDiv,setShowProductCatagoryDiv,
    progress, setProgress,
    allCatagory,setAllCatagory,
    allSubCatagory,setAllSubCatagory,
    allProduct,setAllProduct,
    Rowvalue,setRowvalue,
    PageValue,setPageValue,
    ProductData,setProductData,
    CatagoryId,setCatagoryId,
    featuredProduct,setFeaturedProduct,
    newProduct,setNewProduct,
    stockCheck,setstockCheck,
    FilterPriceValue, setFilterPriceValue,
    BrandId,setBrandId,
    AllBrand,setAllBrand,
    SubCatagoryId, setSubCatagoryId,
    ProductDetailPopupId, setProductDetailPopupId
  }


  const handleErrClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen({
       status:'false',
       color:'#ffffff00',
       data:''
     })
  };
 

useEffect(()=>{

  const handleReSize=()=>{
    setMobileResize(window.innerWidth>800)
   if(window.innerWidth>500 && window.innerWidth<800){
     setMobilesize(3)
     setShowCartInMobile(3)
   }else if(window.innerWidth<500){
     setMobilesize(2)
     setShowCartInMobile(2)
  }else{
    setMobilesize(4)
    setShowCartInMobile(5)
  }
}
  handleReSize();

  window.addEventListener('resize', handleReSize);

  return () => {
    window.removeEventListener('resize', handleReSize);
  };
}, [mobileResize,mobilesize])


  const fetchAllData = async () => {
    setProgress(30);
    const token = localStorage.getItem('Token');

    if (!token || token === 'undefined' || token === '') {
      setIslogin(false);
      setProgress(100);
       if (window.location.pathname !== '/LoginPage') {
     window.location.href = '/LoginPage';
  }
  return;

     
    }

    setIslogin(true);

    try {
      const apis = [
        { url: "/api/subCatagory/get", setter: setAllSubCatagory, progress: 40 },
        { url: "/api/catagory/getallCat", setter: setAllCatagory, progress: 50 },
        { url: "/api/product/get/featured/products", setter: setFeaturedProduct, progress: 60 },
        { url: "/api/product/getLastProduct", setter: setNewProduct, progress: 70 },
        { url: '/api/brand/getall', setter: setAllBrand, progress: 80 },
        { url: "/api/product/getallProduct", setter: setAllProduct, progress: 100 },
      ];

      for (const api of apis) {
        setProgress(api.progress - 10); // Set progress before fetching data
        const res = await fetchDataFromApi(api.url);

        if (res) {
          api.setter(res.Product || res); // Handle cases where response might be { Product: [] }
        }else  if(!res.ok){
          console.log('res',res)
          console.log(res);
        }
        setProgress(api.progress); // Set progress after fetching data
      }
    } catch (err){
      setProgress(100);
      console.log('Err In Fetching Data', err);
    }
  };


useEffect(() => {

  fetchAllData();
}, []);




// useEffect(()=>{
// setProgress(30)
// //  const Token=localStorage.getItem('Token')
// //   if (!Token || Token === 'undefined' || Token === '') {
// //     setProgress(100);
// // window.location.href = '/LoginPage';
  
// //   }


// if (localStorage.getItem('token') === null && localStorage.getItem('token')===''){



//   return window.location.href = '/LoginPage';
// }
// else{
//   setIslogin(true);
//  fetchDataFromApi("/api/subCatagory/get")
//  .then((res)=>{
//   setProgress(40);
//    if(res){

//      setAllSubCatagory(res);
//   }else{
//     console.log(res)
//   }
// return fetchDataFromApi("/api/catagory/getallCat")
// }).then((res)=>{
//   setProgress(50);
//   if(res){
//     setAllCatagory(res);
//   }else{
//     console.log(res)
//   }
  
//   return fetchDataFromApi("/api/product/get/featured/products")})
// .then((res)=>{
//     setProgress(60);
//     if(res){
//        setFeaturedProduct(res.Product);

//   }else{
//     console.log(res)
//   }
//  return  fetchDataFromApi("/api/product/getLastProduct")})
// .then((res)=>{
//   setProgress(70);
//       if(res){

//         setNewProduct(res.Product);
//   }else{
//     console.log(res)
//   }
// return  fetchDataFromApi('/api/brand/getall')})
//  .then((res)=>{
//   setProgress(80)
//      if(res){

//        setAllBrand(res);
//   }else{
//     console.log(res)
//   }
//   return fetchDataFromApi("/api/product/getallProduct")})
//   .then((res)=>{
     
//     setProgress(100)
//        if(res){

//          setAllProduct(res.Product); 
//   }else{
//     console.log(res)
//   }
// })
// .catch((err)=>{
//   setProgress(100)
//   console.log('Err In Fatching Data',err)
// })
// }


// },[])

      const getCountry = async(url)=>{
         await axios.get(url).then((res)=>{
      
          setCountryList(res.data.data);

  

        }
        ).catch((err)=>{
          console.log(err);
        })
      }

  return (
    <BrowserRouter>
    <MyContext.Provider value={{values}}>
      {ShowHeaderFooter=== true &&  <Header/>}
 <LoadingBar
        color="#401098ff"
        height="3px"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className='Error'>
 <Snackbar open={open.status} 
 autoHideDuration={3000}
  onClose={handleErrClose}>
        <Alert
          onClose={handleErrClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' ,
           backgroundColor: open.color,
          }}

        >
        
        {open.data}
        </Alert>
      </Snackbar>
</div>

 <CatSideBar/>



       <Routes>
      <Route path='/' exact={true} element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path='/Shop/:id' exact={true} element={<ProtectedRoute><Shop/></ProtectedRoute>} />
      <Route path='/ProductDetail/:id' exact={true} element={<ProtectedRoute><ProductDetailPage/></ProtectedRoute> } />
      <Route path='/Cart' exact={true} element={<ProtectedRoute><Cart/></ProtectedRoute>} />
      <Route path='/LoginPage' exact={true} element={<LoginPage/>} />
      <Route path='/SignupPage' exact={true} element={<SignupPage />} />
      <Route path='/ForgetPassword' exact={true} element={<ForgetPassword />} />

    </Routes>

    {ShowHeaderFooter=== true &&      <div className="Footer "><div className="coupendiv container-fluid  "> <Coupendiv/> </div><div className="container"><Footer/> </div></div>
    }
    {
   showCart === true &&  <CartDiv/>
 }
    </MyContext.Provider>
  
    </BrowserRouter>
  );
}

export { MyContext };
export default App;