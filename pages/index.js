import React, {Fragment} from "react";
import Head from 'next/head';
import {BsArrowRight} from "react-icons/bs";
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi";
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import {useRouter} from "next/router";
import {mainData, subMainData, techStack, socialLinks} from "../data/Home/mainData";
import {motion} from "framer-motion";

export default function Home() {
    const location = useRouter().pathname
    const{dispatch} = useContext(NavigationContext);

    useEffect(()=>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload: location
        })
    },[dispatch, location])

    // Minimal animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const textItem = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getSocialIcon = (iconName) => {
        switch(iconName) {
            case 'github': return <FiGithub size={18} />;
            case 'linkedin': return <FiLinkedin size={18} />;
            case 'twitter': return <FiTwitter size={18} />;
            default: return null;
        }
    };

  return (
    <>
          <Head>
            <title>Samuel Amagbakhen - Frontend Developer</title>
            <meta name="description" content="Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, scalable web applications." />
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          
          <div className="flex-1 flex flex-col justify-center container w-full mx-auto text-left p-3 max-w-4xl">
              
              {/* Main Heading */}
              <motion.h1 
                variants={container} 
                initial="hidden" 
                animate="visible" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  {
                      mainData.map(({id, content, className}) => {
                          return(
                              <Fragment key={id}>
                                  <motion.span variants={textItem} className={`inline-block ${styles[className]} ${id === 0 ? 'mr-4' : ''}`}>
                                      {content}
                                  </motion.span>
                                  {id !== 0 && ' '}
                              </Fragment>
                          )}
                      )
                  }
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl leading-relaxed secondary-text-color-lighter mb-8 max-w-2xl">
                  {subMainData[0].content}
              </motion.p>

              {/* Tech Stack - Sleek multi-line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-10 max-w-2xl">
                <p className="text-sm secondary-text-color mb-2">Technologies I work with</p>
                <p className="text-base main-text-color leading-relaxed">
                  {techStack.join(' • ')}
                </p>
              </motion.div>

              {/* CTA Links - Minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-wrap gap-6 mb-10">
                <Link href={'/projects'}>
                  <a className="group inline-flex items-center text-lg font-medium main-text-color hover-stand-out-color transition-colors duration-300">
                    View Projects
                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                  </a>
                </Link>
                <Link href={'/contact'}>
                  <a className="inline-flex items-center text-lg font-medium secondary-text-color hover-stand-out-color transition-colors duration-300">
                    Get In Touch
                  </a>
                </Link>
              </motion.div>

              {/* Social Links - Minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary-text-color hover-stand-out-color transition-colors duration-300"
                    aria-label={social.name}>
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </motion.div>
          </div>
          
          <div className="pb-24 sm:pb-0"></div>
    </>
  )
}
