import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return; //if no url is provided do not attempt to fetch data

        const abortController = new AbortController();  //to handle component unmounting while fetch is in progress

        setLoading(true);
        
        (async function fetchData() {
            try {
                const response = await fetch(url, {...options, signal: abortController.signal});
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            }
            catch (err){
                if(err.name === 'AbortError'){  //dont set error state if fetch was aborted, just exit the function
                    //console.log('Fetch aborted');
                    return; //exit if fetch was aborted
                }
                setError(err.message);
                setData(null);
            }
            finally {
                setLoading(false);            
            }
        })(); //IIFE to immediately invoke the async function


        return () => {
            abortController.abort(); //abort fetch request if component unmounts or url changes before fetch completes
        }

    }, [url]);  //only refetch if the url changes

    return { data, loading, error };
}