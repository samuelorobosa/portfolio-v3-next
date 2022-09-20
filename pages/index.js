import Head from 'next/head';
import {BsArrowRight} from "react-icons/bs";
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import {useContext, useEffect} from "react";
import NavigationContext from "../context/NavigationContext/NavigationContext";
import {useRouter} from "next/router";
// import {motion} from "framer-motion";

export default function Home() {
    const location = useRouter().pathname
    const{dispatch} = useContext(NavigationContext);

    useEffect(()=>{
        dispatch({
            type:"CHECK_PATHNAME",
            payload: location
        })
    },[dispatch, location])
  return (
    <>
          <Head>
            <title>Samuel Amagbakhen - Frontend Developer</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico"/>
          </Head>
          <div className="flex-1 flex flex-col justify-center container mx-auto w-full mx-auto text-left md:text-center p-3">
              <p className="text-5xl font-black font-circular-black">
                  Hey there, <br/> this is <span className={styles.pv3__HomeGradientText}>Samuel Amagbakhen.</span></p>
              <p className="w-full md:mx-auto lg:w-1/2 mt-3 leading-10 text-xl mt-8">
                  A <span className="inline-block bg-secondary-text-color text-white rounded  px-1.5">frontend developer</span> developing and maintaining applications on the web.
                  I help companies translate their business requirements into technical specifications using modern web technologies. I have experience in building efficient, clean and scalable web applications.
              </p>
              <p className="w-full md:mx-auto lg:w-1/2 mt-3 leading-10 text-xl mt-3">
                  Currently, {`I'm`} exploring the backend facing side of web applications using Laravel and PHP.
              </p>
          </div>
          <div className="mt-0 sm:mt-8 container mx-auto">
              <Link href={'/projects'}>
                  <a className={`text-2xl hover-secondary-text-color inline-block
                  font-extrabold after:content-[''] after:w-20
                  after:block after:h-0.5 after:bg-white ${styles.pv3__viewMyProjects}
                  transition duration-500 ease-in-out
                  after:transition-all after:delay-300`}>
                      View My Projects&nbsp;<BsArrowRight className={`inline ${styles.pv3__viewMyProjectsIcon}`}/>
                  </a>
              </Link>
          </div>
          <div className="mt-3 md:mt-auto mb-14 md:flex hidden justify-between items-center"></div>
          <div className="pb-24 sm:pb-0"></div>
    </>
  )
}
