
import React from 'react'


const ProductDescription=(props)=>{
   
    return(<> <div className='productDetailDescription mt-4'>
      {props.data !== undefined && props.data.discription ? props.data.discription : 'No description available'}
      </div>
    </>)
}
export default ProductDescription;