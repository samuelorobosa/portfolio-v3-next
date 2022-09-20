import styles from './Navbar.module.scss';
import Link from "next/link";
import {navData} from "../../data/Home/navData";
import {useContext} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";

function Navbar (){
    const{pathName} = useContext(NavigationContext);
    return(
        <>
            <nav className="container mx-auto bg-main-color py-10">
                <div className="flex flex-wrap justify-between items-center">
                    <Link href={'/'} className="flex items-center">
                        <span className="self-center text-5xl cursor-pointer font-bold whitespace-nowrap dark:text-white">
                            SA.
                        </span>
                    </Link>

                    <div className="sm:block w-auto hidden">
                        <ul className="flex text-sm items-center space-x-8 mt-0">
                            {
                                navData.map(({name, id, url})=>{
                                    return(
                                        <li key={id}
                                            className={pathName === url ? 'hidden' : 'list-item'}>
                                            <Link href={`${url}`}
                                                  aria-current="page">
                                                <a className={`${styles.nav_links} after:transition-all after:delay-300 font-circular-medium`}>
                                                    {name}
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
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