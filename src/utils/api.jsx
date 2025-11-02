
import axios from 'axios';
import env from 'react-dotenv'

const API_URL = env.API_URL;
const token= localStorage.getItem('Token');
const BAREAR_TOKEN=env.BAREAR_TOKEN 


export const fetchDataFromApi = async (url) => {

        const{data}=await axios.get(`${API_URL}${url}`, {
  headers: {
    Authorization: `${BAREAR_TOKEN} ${token}`,
  },
})
        // console.log(data);
        return data;

    
} 

export const getDataById=async(url)=>{
  
        const{data}=await axios.get(`${env.API_URL}${url}`, {
  headers: {
    Authorization: `${BAREAR_TOKEN} ${token}`,
  },
})
        return data;

}

export const postData=async(url,formData)=>{
  
 const {data}=   await axios.post(`${env.API_URL}${url}`, formData, {
   headers: {
    Authorization: `${BAREAR_TOKEN} ${token}`,
  },
})

return data;



}


export const updateData=async(url,formData)=>{
    
      const {data}=  await axios.put(`${env.API_URL}${url}`, formData, {
  headers: {
    Authorization: `${BAREAR_TOKEN} ${token}`,
  },
})
       return data;
   
}

export const deleteData=async(url)=>{
  
      const{data}=  await axios.delete(`${env.API_URL}${url}`, {
   headers: {
    Authorization: `${BAREAR_TOKEN} ${token}`,
  },
})
       return(data); 
   
// console.log(url)
}



