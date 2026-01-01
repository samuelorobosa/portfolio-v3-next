import React from "react";
import styles from './Navbar.module.scss';
import Link from "next/link";
import {navData} from "../../data/Home/navData";
import {useContext} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import {motion} from "framer-motion";
import {listContainer, listItem, logoItem} from "../../styles/animations/NavbarAnimations";

function Navbar (){
    const{pathName} = useContext(NavigationContext);
    return(
        <>
            <nav className="container mx-auto bg-dark-900/90 backdrop-blur-md py-5 border-b border-white/5 mb-2">
                <div className="flex flex-wrap justify-between items-center">
                    <Link href={'/'} className="flex items-center">
                        <motion.a variants={logoItem} initial="hidden" animate="show">
                             <span className="self-center text-5xl cursor-pointer font-bold whitespace-nowrap dark:text-white">
                                SA.
                            </span>
                        </motion.a>
                    </Link>

                    <div className="sm:block w-auto hidden">
                        <motion.ul
                            variants={listContainer}
                            initial="hidden"
                            animate="visible"

                            className="flex text-sm items-center space-x-8 mt-0">
                            {
                                navData.map(({name, id, url})=>{
                                    return(
                                        <motion.li key={id}
                                            variants={listItem}
                                            // className={pathName === url ? 'hidden' : 'list-item'}
                                        >
                                            <Link href={`${url}`}
                                                  aria-current="page">
                                                <a className={`${styles.nav_links} ${pathName === url ? styles['nav_links--focused'] : ''} after:transition-all after:delay-300 font-medium`}>
                                                    {name}
                                                </a>
                                            </Link>
                                        </motion.li>
                                    )
                                })
                            }
                        </motion.ul>
                    </div>
                </div>
            </nav>

            <nav className={`flex sm:hidden justify-between fixed text-sm items-center w-full bottom-0 ${styles.pv3__navBottom}`}>
                {
                    navData.map(({name, id, url, icon})=>{
                        return(
                            <Link key={id} href={`${url}`}
                                  aria-current="page">
                                <a className={pathName === url ? styles.active : ''}>
                                    <span className={styles.pv3__navBottomIcon}>{icon}</span>
                                    <span className={styles.pv3__navBottomText}>{name}</span>
                                </a>
                            </Link>
                        )
                    })
                }
            </nav>
        </>
    )
}

export default Navbar;