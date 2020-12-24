import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });
    //Si el componente es desmontado y la petición se sigue ejecutando esta falla
    //para solucionarlo se utiliza el useRef
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false; 
        }
    }, []);
    useEffect(() => {
        setState({data:null,error:null,loading:true});
        fetch(url).then(res => res.json()).then(data => {
            if (isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data
                });
            }
        });
    }, [url]);
    return state;
}
