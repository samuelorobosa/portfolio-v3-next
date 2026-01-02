import {useContext, useEffect, useState} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import {projectsData} from "../../data/Projects/projectsData";
import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import {motion} from "framer-motion";
import ProjectModal from "../../components/ProjectModal";
import styles from '../../styles/Work.module.scss'

const Projects = () => {
    const location = useRouter().pathname
    const{pathName, dispatch} = useContext(NavigationContext);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageLoadedStates, setImageLoadedStates] = useState({});

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

    const openModal = (index) => {
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProjectIndex(null), 300);
    };

    const goToNext = () => {
        setSelectedProjectIndex((prev) => 
            prev === projectsData.length - 1 ? 0 : prev + 1
        );
    };

    const goToPrevious = () => {
        setSelectedProjectIndex((prev) => 
            prev === 0 ? projectsData.length - 1 : prev - 1
        );
    };

    const handleImageLoad = (projectId) => {
        setImageLoadedStates(prev => ({
            ...prev,
            [projectId]: true
        }));
    };

    return(
        <>
            <Head>
                <title>Projects | Samuel - Software Developer</title>
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

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className={`mt-10 w-11/12 lg:w-5/6 mx-auto ${styles.pv3__projectsContainer}`}>
                    {projectsData.map((project, index)=>{
                        const isLoaded = imageLoadedStates[project.id];
                        return (
                            <motion.div 
                                variants={item}
                                key={project.id} 
                                onClick={() => openModal(index)}
                                className={`${styles.projectCard} cursor-pointer transition-all duration-500 rounded-lg overflow-hidden bg-dark-700 shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-transparent hover:border-blue-500/50`}>
                                
                                {/* Project Image with Loading State */}
                                <div className={styles.projectImage}>
                                    {!isLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-dark-900">
                                            <div className="w-8 h-8 border-3 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        width={800}
                                        height={500}
                                        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        onLoadingComplete={() => handleImageLoad(project.id)}
                                    />
                                    {/* Overlay on hover */}
                                    <div className={styles.imageOverlay}>
                                        <span className="text-sm font-medium">View Details</span>
                                    </div>
                                    
                                    {/* Floating Project Title */}
                                    <div className={styles.floatingTitle}>
                                        <h2 className="font-semibold text-lg main-text-color">{project.title}</h2>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <div className="pb-24 sm:pb-0"></div>
            </motion.div>

            {/* Project Details Modal */}
            <ProjectModal 
                project={selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null}
                isOpen={isModalOpen}
                onClose={closeModal}
                onNext={goToNext}
                onPrevious={goToPrevious}
                currentIndex={selectedProjectIndex !== null ? selectedProjectIndex : 0}
                totalProjects={projectsData.length}
            />
        </>
    )
}

export default Projects;
