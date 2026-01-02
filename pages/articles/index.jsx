import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import {useRouter} from "next/router";
import Head from "next/head";
import {FiExternalLink} from "react-icons/fi";
import {motion} from "framer-motion";
import styles from "../../styles/Articles.module.scss"


export  const getAllArticles = async () => {
    try {
        const res = await fetch(`https://dev.to/api/articles?username=samuelorobosa`);
        return await res.json();
    } catch (e) {
        console.log(`Could not get all articles ${e}`)
    }
}

export async function getStaticProps(context){
    let articles  = await getAllArticles();
    return {
        props: {
            articles
        }
    };
}

export default function Articles ({articles}) {
    const router = useRouter();
    const location = router.pathname
    const{pathName, dispatch} = useContext(NavigationContext);

    useEffect(()=>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload: location
        })
    },[dispatch, location])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return(
        <>
            <Head>
                <title>Articles | Samuel - Software Developer</title>
            </Head>
            <motion.div
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.7,
                }}
                className="container mx-auto flex flex-col">
                <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
                <h1 className="text-4xl font-extrabold text-center">
                    <span className="stand-out-color text-base inline-block mr-3">04.</span>
                    My Articles
                </h1>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className={`mt-10 w-11/12 lg:w-5/6 mx-auto ${styles.pv3__articlesContainer}`}>
                    {
                        articles.map(({id, title, published_at, tags, canonical_url, reading_time_minutes, cover_image}) => {
                            const convertedDate = new Date(published_at).toLocaleDateString(undefined,{
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            });
                            
                            // Split tags into array
                            const tagArray = tags ? tags.split(',').map(tag => tag.trim()).slice(0, 3) : [];
                            
                            return (
                                <motion.a 
                                    variants={item}
                                    key={id}
                                    href={canonical_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${styles.articlesDiv} group py-8 px-4 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300`}>

                                    {/* Left Side: Title and Date */}
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 text-xs secondary-text-color mb-2 font-mono uppercase tracking-widest">
                                            <span>{convertedDate}</span>
                                            {reading_time_minutes && (
                                                <>
                                                    <span className="opacity-30">|</span>
                                                    <span className="flex items-center gap-1">
                                                        {reading_time_minutes} min read
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className="font-bold text-2xl md:text-3xl group-hover:text-blue-400 transition-colors duration-300">
                                            {title}
                                        </h2>
                                    </div>

                                    {/* Right Side: Tags and Link */}
                                    <div className="flex flex-col md:items-end gap-4 min-w-[200px]">
                                        {tagArray.length > 0 && (
                                            <div className="flex flex-wrap md:justify-end gap-2">
                                                {tagArray.map((tag, index) => (
                                                    <span 
                                                        key={index}
                                                        className="text-[10px] px-2 py-0.5 rounded-full border border-blue-500/20 text-blue-400 font-mono">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-blue-400/70 group-hover:text-blue-400 transition-all duration-300">
                                            <span className="font-semibold uppercase tracking-wider text-xs">Read More</span>
                                            <FiExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.a>
                            )
                        })
                    }
                </motion.div>

                <div className="pb-24 sm:pb-0"></div>
            </motion.div>
        </>
    )
}
