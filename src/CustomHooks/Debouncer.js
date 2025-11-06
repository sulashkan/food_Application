import React,{useState,useEffect} from "react";

function useDebounce(newvalue,delay){

    const [value,setValue] = useState(newvalue);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setValue(newvalue);
        },delay)
        return () =>{
            clearTimeout(handler);
        }
    },[newvalue,delay])
    return value
} export default useDebounce








