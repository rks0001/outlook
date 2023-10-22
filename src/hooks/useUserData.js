import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { userInfo } from "../redux/userSlice";

const useUserData = (movieId) => {
    const dispatch = useDispatch(); 

  

    const getData = async() =>{
        const data = await fetch('https://flipkart-email-mock.vercel.app/'); 
        const json = await data.json(); 
        dispatch(userInfo(json));
    
    }

    useEffect(()=>{
    getData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useUserData