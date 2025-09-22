import { CiSearch } from "react-icons/ci";
import Button from '@mui/material/Button';

const Searchheader= () => {
  return (
    <>
        <div className="header-search d-flex align-items-center">
      <input type="text" placeholder="Search for products..." />
        <Button className='search-btn'>
        <CiSearch className="search-icon"/>
        </Button>
    </div>
    </>

  );
}

export default Searchheader;