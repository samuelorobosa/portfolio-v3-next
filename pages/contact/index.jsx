import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import Head from "next/head";

export default function Contact (){
    const location = useRouter().pathname
    const{pathName, dispatch} = useContext(NavigationContext);

    useEffect(()=>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload: location
        })
    },[dispatch, location])
    return(
        <>
            <Head>
                <title>Contact | Samuel - Frontend Developer</title>
            </Head>
        </>
    )
}