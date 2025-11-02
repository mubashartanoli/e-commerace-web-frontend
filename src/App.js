import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './responsive.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Whilist from "./Pages/Whilist";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import OtpPage from "./Pages/OtpPage";
import ForgetPassword from "./Pages/forgetPassPage";
import EnterNewPass from "./Pages/EnterNewPass";
import ProductDetailPage from './Pages/ProductDetailPage';
import MyAccountPage from './Pages/MyAccountPage';
import AllOrder from './Pages/AllOrder';
import Cart from './Pages/Cart';
import ProceedToCheckOut from './Pages/ProceedToCheckOut';
import Footer from './components/Footer';
import Coupendiv from './components/Coupendiv';
import Header from "./components/Header";
import CatSideBar from './components/CatSideBar';
import SearchDailogue from './components/Header/SearchDailogue';
import { createContext, useEffect, useState } from 'react';

import CartDiv from './components/CartDiv';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from 'react-top-loading-bar';
import UpdateReview from './components/ProductDetail/UpdateReview'
import DeleteReview from './components/ProductDetail/DeleteReview'
import {fetchDataFromApi} from './utils/api';
import { ProtectedRoute } from './utils/ProtectedRoute';
// import env from 'react-dotenv';


const MyContext = createContext();

function App() {
const[UserData,setUserData]=useState(null);
const[searchProductInPhone,setsearchProductInPhone]=useState(false);
   const [progress, setProgress] = useState(0);
  const [mobileResize,setMobileResize]=useState(false);
  const [mobilesize,setMobilesize]=useState(4);
  const [ShowCartInMobile,setShowCartInMobile]=useState(5);
const[reviewLength,setReviewLength]=useState(0)
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
const [OrderData,setOrderData] = useState([]);
const [BrandId,setBrandId] = useState('All');
const [AllBrand,setAllBrand] = useState([]);
  const [stockCheck,setstockCheck] = useState(null);
      const[FilterPriceValue, setFilterPriceValue] = useState([1, 10000]);
      const[SubCatagoryId, setSubCatagoryId] = useState('All');
      const[ProductDetailPopupId, setProductDetailPopupId] = useState(null);
      const [productSize,setProductSize]=useState();
const [productColor,setProductColor]=useState();
const [number, setNumber] = useState(1);
const [ProductDetailData,setProductDetaiData]=useState();
const[cartData,setCartData]=useState([]);
const[productReviewData,setproductReviewData]=useState([]);
const[updateReviewData,setupdateReviewData]=useState(null);
const[updateReviewDilog,setupdateReviewDilog]=useState(false);
const[deleteReviewData,setdeleteReviewData]=useState(false);
const[productReviewid,setproductReviewid]=useState(null);
const[Reviewproductid,setReviewproductid]=useState(null);
const[AllCartTotalPrice,setAllCartTotalPrice]=useState(0);
const [ActiveProductDetailBtn ,setActiveProductDetailBtn]= useState('One')
const [WhilistData ,setWhilistData]= useState(null);
const[OrderFormData,setOrderFormData]=useState({
email:'',
contact:'',
name:'',
Province:'',
city:'',
address:'',
products:[],
total:'',
UserId:localStorage.getItem('UserId'),

})
     const [open,setOpen]=useState({
       status:false,
       color:'#ffffff00',
       data:''
     })
     const [CitiesList, setCitiesList] = useState([
      "Burewala","Jaranwala","Sadiqabad", "Khanpur",
  "Mandi Bahauddin", "Chishtian","Hasilpur","Attock","Kamoke",
  "Wazirabad","Layyah","Shujabad","Sambrial","Bhalwal",
  "Taunsa Sharif","Pattoki","Shahdadpur","Jauharabad","Kabirwala",
  "Chunian","Sangla Hill","Haripur","Nankana","Pasrur",
  "Gwadar","Rajanpur","Rohri","Zhob","Matli",
  "Pano Aqil","Kotri","Tando Muhammad Khan","Haroonabad","Chenab Nagar",
  "Kahror Pakka","Gujar Khan","Kot Malik Barkhurdar","Chuchar-kana Mandi","Toba Tek Singh",
  "Narowal","Shorkot","Shabqadar","Mansehra","Shujaabad",
  "Haveli Lakha","Dalbandin","Daulatpur","Bhag","Rasulnagar",
  "Chak","Shahpur","Tando Bago","Baffa","Karak",
  "Garhi Khairo","Lakhi","Gadani","Surab","Rojhan",
  "Ormara","Chamber","Kalaswala","Islamkot","Liliani",
  "Bhiria", "Mirwah Gorchani","Baddomalhi","Jand","Chak Two Hundred Forty-nine Thal Development",
  "Dera Bugti","Tharu Shah","Naushahro Firoz","Daur","Bhopalwala",
  "Paharpur","Bhan","Mach","Goth Radhan","Uthal",
  "Kaleke Mandi","Jiwani","Johi","Chhor","Mangla",
  "Mehar","Khangah Dogran","Khairpur Nathan Shah","Upper Dir","Ghauspur",
  "Tangi","Utmanzai","Thal","Minchianabad","Garh Maharaja",
  "Jahanian Shah","Mastung","Mananwala","Fazilpur","Talamba",
  "Kunjah","Jhawarian","Nasirabad","Nushki","Zahir Pir",
  "Dunyapur","Gambat","Kashmor","Alipur","Naudero",
  "Pasni","Sukheke Mandi","Setharja Old","Khewra","Mamu Kanjan",
  "Sharqpur Sharif","Digri","Bhera","Sakrand","Tando Jam",
  "Raiwind","Lalian","Khairpur Tamewah","Kharan","Pabbi",
  "Chak Jhumra","Sahiwal","Renala Khurd","Risalpur Cantonment","Lakki",
  "Topi","Hangu","Pir Jo Goth","Kundian","Pir Mahal",
  "Khurrianwala","Mehrabpur","Pindi Bhattian","Malakwal City","Narang Mandi",
  "Malakwal","Thul","Pindi Gheb","Raja Jang","Pishin",
  "Chawinda","Ubauro","Mithi","Akora","Zafarwal",
  "Kot Samaba","Eminabad","Kahuta","Ranipur","Kulachi",
  "Khanpur Mahar","Hingorja","Naukot","Pind Dadan Khan","Kanganpur",
  "Faruka","Kotli Loharan","Shahpur Chakar","Talhar","Pad Idan",
  "Kot Ghulam Muhammad","Qadirpur Ran","Bela","Surkhpur","Dhoro Naro",
  "Khangarh","Sarai Naurang","Gharo","Bhit Shah","Matiari",
  "Dhanot","Warah","Lachi","Sita Road","Dijkot",
  "Sillanwali","Kandiaro","Zaida","Kunri","Kalat",
  "Daud Khel","Mitha Tiwana","Hazro City","Dunga Bunga","Aman Garh",
  "Karor","Kot Diji","Kalur Kot","Murree","Faqirwali","Ahmadpur Sial","Phalia","Yazman",
  "Muzaffarabad","Mirpur","Quetta","Turbat","Islamabad","Hub","Khuzdar","Dera Murad Jamali",
  "Peshawar","Mardan","Mingora","Kohat","Abbottabad","Dera Ismail Khan","Nowshera","Charsadda",
  "Swabi","Karachi","Hyderabad","Sukkur","Larkana","Nawabshah",
  "Mirpur Khas","Shikarpur","Jacobabad","Khairpur","Dadu","Tando Adam",
  "Badin","Kandhkot","Lahore","Faisalabad","Rawalpindi","Gujranwala",
  "Multan","Sargodha","Bahawalpur","Sialkot","Gujrat","Jhang","Sheikhupura","Kasur","Okara","Vehari","Gojra","Khanewal","Jhelum","Hafizabad","Chiniot","Kamalia",
]);
     const[showCart ,setShowCart]=useState(false);
     const [ShowHeaderFooter, setShowHeaderFooter] = useState(true);
  const [selectedCityLocation ,setselectedCityLocation] = useState('Select Location');

  const values={
    UserData,setUserData,
    searchProductInPhone,setsearchProductInPhone,
    WhilistData ,setWhilistData,
    ActiveProductDetailBtn ,setActiveProductDetailBtn,
    OrderData,setOrderData,
    OrderFormData,setOrderFormData,
    selectedCityLocation ,setselectedCityLocation,
    CitiesList,setCitiesList,
    showCart, setShowCart,
    AllCartTotalPrice,setAllCartTotalPrice,
    Reviewproductid,setReviewproductid,
    updateReviewDilog,setupdateReviewDilog,
    productReviewid,setproductReviewid,
    deleteReviewData,setdeleteReviewData,
    updateReviewData,setupdateReviewData,
    reviewLength,setReviewLength,
    productReviewData,setproductReviewData,
    cartData,setCartData,
    number, setNumber,
    ProductDetailData,setProductDetaiData,
    ShowHeaderFooter,setShowHeaderFooter,
    productColor,setProductColor,
    productSize,setProductSize,
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
const userId=localStorage.getItem('UserId')
    if (!token || token === 'undefined' || token === '') {
      setIslogin(false);
      setProgress(100);
  return;
 }
    setIslogin(true);

    try {
      const apis = [
        { url: `/api/auth/get/user/${userId}`, setter: setUserData, progress: 20,errMsg:'Err In Fetching User Data'  },
        { url: `/api/Whilist/get/${userId}`, setter: setWhilistData, progress: 30,errMsg:'Err In Fetching Whilist'  },
        { url: "/api/subCatagory/get", setter: setAllSubCatagory, progress: 40,errMsg:'Err In Fetching SubCatagory' },
        { url: "/api/catagory/getallCat", setter: setAllCatagory, progress: 50,errMsg:'Err In Fetching Catagory'  },
        { url: "/api/product/get/featured/products", setter: setFeaturedProduct, progress: 60,errMsg:'Err In Fetching Featured Product'  },
        { url: `/api/cart/getAllby/${userId}`, setter: setCartData, progress: 70,errMsg:'Err In Fetching Cart'  },
        { url: "/api/product/getLastProduct", setter: setNewProduct, progress: 80,errMsg:'Err In Fetching Latest Product'  },
        { url: '/api/brand/getall', setter: setAllBrand, progress: 90,errMsg:'Err In Fetching Brands'  },
        { url: "/api/product/getallProduct", setter: setAllProduct, progress: 100,errMsg:'Err In Fetching AllProduct'  },
      ];

      for (const api of apis) {
        setProgress(api.progress - 10); // Set progress before fetching data
        await fetchDataFromApi(api.url).then((res)=>{
api.setter(res.Product ||res.Cart ||res.data || res );
setProgress(api.progress);
        }).catch((err)=>{
          console.error('Network Error....');
          console.log(api.errMsg, err);
          setProgress(100);
        });

       
         
      }
    } catch (err){
      setProgress(100);
      console.log('Err In Fetching Data', err);
    }
  };


useEffect(() => {
fetchAllData()

}, []);


   useEffect(()=>{
    if(cartData && cartData?.length>0){
const sum = cartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.subTotal
}, 0);

setAllCartTotalPrice(sum);
    }
    return;
   },[cartData])



    

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
 <Snackbar open={open.status===true} 
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
      <Route path='/SignupPage' exact={true} element={<SignupPage/>} />
      <Route path='/VerifyOtp' exact={true} element={<OtpPage/>} />
      <Route path='/ForgetPassword' exact={true} element={<ForgetPassword />} />
      <Route path='/EnterNewPassword' exact={true} element={<EnterNewPass />} />
      <Route path='/ProceedToCheckOut' exact={true} element={<ProtectedRoute><ProceedToCheckOut /></ProtectedRoute>} />
      <Route path='/Orders' exact={true} element={<ProtectedRoute><AllOrder /></ProtectedRoute>} />
      <Route path='/Whilist' exact={true} element={<ProtectedRoute><Whilist /></ProtectedRoute>} />
      <Route path='/MyAccount' exact={true} element={<ProtectedRoute><MyAccountPage /></ProtectedRoute>} />

    </Routes>

<UpdateReview/>
<DeleteReview/>
    {ShowHeaderFooter=== true &&  
       <div className="Footer "><div className="coupendiv container-fluid  "> <Coupendiv/> </div><div className="container"><Footer/> </div></div>
     }
    {
   showCart === true &&   <CartDiv/> 
 }
    {
  searchProductInPhone === true &&  <SearchDailogue/>
 }
    </MyContext.Provider>
  
    </BrowserRouter>
  );
}

export { MyContext };
export default App;