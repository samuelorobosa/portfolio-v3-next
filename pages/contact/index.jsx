import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import Head from "next/head";
import Link from "next/link";
import {socialsData} from "../../data/Contact/socialsData";
import {BsArrowUpRight} from "react-icons/bs";
import {motion} from "framer-motion";

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
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 0.7,
                }}
                className="container mx-auto flex flex-col h-5/6 justify-between">
                <div>
                    <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
                    <h2 className="text-4xl font-extrabold text-center">
                        <span className="stand-out-color text-base inline-block mr-3">05.</span>
                        {`Let's`} Have A Talk
                    </h2>
                    <p className="text-xl md:w-1/2 sm:w-5/6 mx-auto text-center mt-12">
                        I'm always open to connecting and exploring new opportunities.
                        Whether you're interested in collaborating, have a question, or simply want to say hello, please click the button below to send me a mail directly.
                    </p>
                </div>
                <div className="text-center text-xl py-4 px-20 mt-6">
                    <Link href={'mailto:orobosaamagbakhen@email.com'}>
                        <a className="px-4 transition duration-500 text-base hover:bg-blue-600 hover:text-white border border-standout-color py-2.5 stand-out-color rounded font-bold">
                            Say Hello
                        </a>
                    </Link>
                </div>
                <div className="mt-3 md:mt-auto mb-14 flex justify-center flex-col md:flex-row md:justify-between items-center">
                    <p className={`text-2xl font-bold flex my-3`}>Connect with me online</p>
                    <div className="flex flex-wrap font-extrabold my-3">
                        {socialsData.map(social => (
                            <a className="px-3 flex flex-nowrap items-center hover-secondary-text-color transition duration-500 ease-in-out whitespace-nowrap"
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
            </motion.div>
        </>
    )
}
