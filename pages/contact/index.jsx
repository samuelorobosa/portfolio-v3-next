import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import Head from "next/head";
import Link from "next/link";
import {socialsData} from "../../data/Contact/socialsData";
import {BsArrowUpRight} from "react-icons/bs";

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
            <div className="container mx-auto flex flex-col h-5/6 justify-between">
                <div>
                    <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
                    <h2 className="text-5xl font-extrabold text-center">
                        <span className="stand-out-color text-base inline-block mr-3">05.</span>
                        {`Let's`} Have A Talk
                    </h2>
                    <p className="text-xl md:w-1/2 sm:w-5/6 mx-auto text-center mt-12">
                        Hi, Samuel here, {`I'd`} love to hear from you -
                        whether {`you're`} looking to collaborate, you have a question,
                        or you think we might be a good fit for each other, send an
                        <span className="inline-block bg-secondary-text-color text-white rounded mx-1.5 px-1.5">email</span>
                        across. {`I'll`} get back to you ASAP.
                    </p>
                </div>
                <div className="text-center text-xl py-5 px-12 mt-6">
                    <Link href={'mailto:amagbakhensamuel@email.com'}>
                        <a className="px-3 transition duration-500 hover:bg-blue-600 hover:text-white border border-standout-color py-5 px-12 stand-out-color rounded font-bold">
                            Say Hello
                        </a>
                    </Link>
                </div>
                <div className="mt-3 md:mt-auto mb-14 flex justify-center md:justify-between items-center">
                    <p className="text-2xl font-bold hidden md:flex">Connect with me online</p>
                    <div className="flex flex-nowrap font-extrabold">
                        {socialsData.map(social => (
                            <a className="px-3 flex flex-nowrap items-center hover-secondary-text-color transition duration-500 ease-in-out"
                                  href={social.url}
                                  key={social.id}
                                  target="_blank"
                                  rel="noopener noreferrer">
                                {social.icon}&nbsp;&nbsp;{social.name} &nbsp;
                                <BsArrowUpRight className="inline"/>
                            </a>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}