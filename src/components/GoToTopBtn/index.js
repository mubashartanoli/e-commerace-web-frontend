import { useContext } from "react";
import { MyContext } from '../../App';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
const GoToTopBtn = () => {
    const context =useContext(MyContext);
    const showTopBtn=context.values.showTopBtn
      const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
        <div className={`go-to-top-btn ml-auto ${showTopBtn===true ? 'go-to-top-btn-show' : 'go-to-top-btn-hide'}`}>
            <IconButton onClick={handleClick}><KeyboardArrowUpIcon /></IconButton>
        </div>
    );
};

export default GoToTopBtn;