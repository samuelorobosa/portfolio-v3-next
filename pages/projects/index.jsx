import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {projectsData} from "../../data/Projects/projectsData";
import {useRouter} from "next/router";
import Head from "next/head";
import {motion} from "framer-motion";
import styles from '../../styles/Work.module.scss'

const Projects = () => {
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
                <title>Projects|Samuel - Frontend Developer</title>
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
                            <span className="stand-out-color text-base inline-block mr-3">02.</span>
                            Some Projects {`I've`} Worked On
                        </h1>

                        <div className={`mt-5 w-11/12 sm:w-3/4 mx-auto ${styles.pv3__projectsContainer}`}>
                            {projectsData.map(({id,title,description,techUsed,gitHubLink,liveLink})=>{
                                return (
                                    <div key={id} className={`flex flex-col justify-between ${styles.projectDiv} transition duration-500 p-4 rounded my-3.5 text-left bg-secondary-text-color main-text-color`}>
                                        <h1 className="font-semibold flex duration-500 justify-end text-xl">
                                            {gitHubLink && <a target="_blank" rel="noreferrer" href={gitHubLink} className='transition-all hover-stand-out-color mx-2'><FiGithub/></a>}
                                            &nbsp;
                                            {liveLink && <a target="_blank" rel="noreferrer" href={liveLink} className="transition-all duration-500 hover-stand-out-color"><FiExternalLink/></a>}
                                        </h1>
                                        <h1 className="font-semibold text-xl">{title}</h1>
                                        <p className="text-sm md:mb-24">{description}</p>
                                        <p className="text-sm font-mono">{techUsed}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="pb-24 sm:pb-0"></div>
                    </motion.div>
        </>
    )
}

export default Projects;
