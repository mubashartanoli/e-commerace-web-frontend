import HomeSlider from "../../components/HomeSlider";
import SectionDiv from "../../components/SectionDiv";
import CatagoryDiv from "../../components/CatagoryDiv";
import GoToTopBtn from "../../components/GoToTopBtn";
// import Coupendiv from "../../components/Coupendiv";
// import Footer from "../../components/Footer";
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";

const Home= ()=>{
      const context= useContext(MyContext)

      
      const  setShowTopBtn=context.values.setShowTopBtn
     

        useEffect(()=>{
            context.values.setShowHeaderFooter(true)
            
        })


        useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    } 
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [setShowTopBtn]);

    return(
        <>
         <GoToTopBtn/>
        {/* hello */}
        <div className=" container-fluid overflow-hidden "><HomeSlider/></div>
        <div className="container mt-2 overflow-hidden "><CatagoryDiv/></div>
        <div className="container mb-5"><SectionDiv/></div>
        {/* <div className="coupendiv container-fluid mt-5 "> <Coupendiv/> </div> */}
     
        </> 
    )
}

export default Home;