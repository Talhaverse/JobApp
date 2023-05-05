import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
        //   'X-RapidAPI-Key': '79b0194275msh540e683f895ed67p169501jsn4707ccdcb511',
         'X-RapidAPI-Key': 'b9bb2ac4b7msh6e1efb1b528cd0dp10f475jsnc011575524aa',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },

        params: {
            ...query
        },
      };

const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request (options);
        setData(response.data.data);
        setIsLoading(false);
        
    } catch (error) {
        setError(error);
        alert("There is an unexpected error")
    } finally {
        setIsLoading(false);
    }

}

useEffect(() => {
  fetchData();
}, []);

const refetch =  () => {
setIsLoading(true);
fetchData();
}

return {data, isLoading,error,refetch };
} 

export default useFetch;