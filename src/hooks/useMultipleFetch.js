// wont be using as there is rate limit on the API and the theMealDB API does not support batch fetching of recipes by IDs, so we would have to make individual requests for each favorite recipe, which is inefficient and could lead to hitting the rate limit. Instead, we will store the entire recipe object in localStorage when a user favorites a recipe, allowing us to display the favorites without needing to fetch them again from the API.

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