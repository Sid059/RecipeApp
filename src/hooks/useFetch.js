import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) {
            setLoading(false);
            return; //if no url is provided do not attempt to fetch data
        }

        let isMounted = true; //isMounted tracks if component is still on screen
        
        const abortController = new AbortController();  //to handle component unmounting while fetch is in progress
        
        (async function fetchData() {
            try {
                setLoading(true);

                const response = await fetch(url, {...options, signal: abortController.signal});

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if(isMounted){  //Only update state if component is STILL mounted
                    setData(result);
                }
                
            }
            catch (err){
                if(err.name === 'AbortError'){  //dont set error state if fetch was aborted, just exit the function
                    //console.log('Fetch aborted');
                    return; //exit if fetch was aborted
                }

                if(isMounted){ //Real error, only update if component is still mounted
                    setError(err.message);
                    setData(null);
                }
            }
            finally {
                if (isMounted) setLoading(false); // only here!
            }
        })(); //IIFE to immediately invoke the async function


        return () => {
            isMounted = false;
            abortController.abort(); //abort fetch request if component unmounts or url changes before fetch completes
        }

    }, [url]);  //only refetch if the url changes

    //console.log('useFetch - loading:', loading, 'url:', url);

    return { data, loading, error };
}