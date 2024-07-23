import { useState, useEffect } from 'react';

const useFetch = (url) => {

    let [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();
        setTimeout(() => {
          fetch(url, {signal: abortCtrl.signal})
          .then(res => {
            if (!res.ok) {
              throw Error('Could not fetch for resource');
            }
            return res.json();
          }).then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
          }).catch((err)=> { 
            if (err.name !== 'AbortError') {
              setIsPending(false);
              setError(err.message)
            }
          })
        }, 1000);
        return () => abortCtrl.abort();
      }, [url]);

    return {data, isPending, error};
}

export default useFetch;

