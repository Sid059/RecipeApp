import { useState, useEffect } from 'react';

export default function useMultipleFetch(urls = []) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(urls.length === 0) {
            setData([]);
            setLoading(false);
            setError(null);
            return;
        }

        let isMounted = true;

        const abortController = new AbortController();

        (async function fetchAllData() {
            try{
                setLoading(true);

                const responses = await Promise.all(urls.map(url => fetch(url, {signal : abortController.signal})));

                const anyFailedResponse = responses.find( response => !response.ok);
                if(anyFailedResponse) {
                    throw new Error(`HTTP error! status: ${anyFailedResponse.status}`);
                }

                const results = await Promise.all(responses.map(response => response.json()));

                if(isMounted) {
                    setData(results);
                    setError(null);
                }
            }
            catch(err){
                if(err.name === 'AbortError'){
                    return;
                }

                if(isMounted) {
                    setError(err.message);
                    setData([]);
                }
            }
            finally {
                if(isMounted) setLoading(false);
            }
        })();


        return () => {
            isMounted = false;
            abortController.abort();
        }
    }, [urls]);

    return { data, loading, error };

}