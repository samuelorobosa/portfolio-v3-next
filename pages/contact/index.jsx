import {useRouter} from "next/router";
import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import Head from "next/head";
import Link from "next/link";
import {socialsData} from "../../data/Contact/socialsData";
import {FiMail, FiArrowUpRight} from "react-icons/fi";
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

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return(
        <>
            <Head>
                <title>Contact | Samuel - Software Developer</title>
            </Head>
            <motion.div
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.7,
                }}
                className="container mx-auto flex flex-col md:justify-center py-12 md:py-0 md:min-h-[70vh] max-w-3xl px-6">
                
                {/* Header */}
                <div className="mb-10">
                    <h1 className="font-semibold text-xl md:text-2xl text-center secondary-text-color mb-3">{pathName}</h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="stand-out-color text-base inline-block mr-3">05.</span>
                        {`Let's`} Connect
                    </h2>
                </div>

                {/* Description */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl leading-relaxed secondary-text-color-lighter text-center mb-10">
                    I'm always open to new opportunities, collaborations, and conversations. Whether you have a project in mind or just want to chat about tech, feel free to reach out.
                </motion.p>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mb-12">
                    <Link href={'mailto:amagbakhensamuel@gmail.com'}>
                        <a className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
                            <FiMail size={20} />
                            Send me an email
                        </a>
                    </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="border-t border-white/5 pt-8">
                    <p className="text-sm secondary-text-color text-center mb-6 font-mono uppercase tracking-widest">Or connect with me on</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {socialsData.map((social) => (
                            <motion.a
                                variants={item}
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 text-base secondary-text-color hover-stand-out-color transition-colors duration-300">
                                <span className="text-xl">{social.icon}</span>
                                <span className="font-medium">{social.name}</span>
                                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0 transition-transform" size={14} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <div className="pb-32 sm:pb-0"></div>
            </motion.div>
        </>
    )
}
