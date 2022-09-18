import {useContext, useEffect} from "react";
import NavigationContext from "../../context/NavigationContext/NavigationContext";
import {useRouter} from "next/router";
import Head from "next/head";
import {BsFillEyeFill} from "react-icons/bs";
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
    return(
        <>
            <Head>
                <title>Articles | Samuel - Frontend Developer</title>
            </Head>
            <div className="container mx-auto flex flex-col">
                <h1 className="font-semibold text-2xl  text-center secondary-text-color mb-5">{pathName}</h1>
                <h1 className="text-5xl font-extrabold text-center">
                    <span className="stand-out-color text-base inline-block mr-3">04.</span>
                    My Articles
                </h1>

                <div className={`mt-5 w-11/12 sm:w-3/4 mx-auto ${styles.pv3__articlesContainer}`}>
                        {
                                <>
                                    {
                                        articles.map(({id,title,published_at,tags,canonical_url})=>{
                                            const convertedDate = new Date(published_at).toLocaleDateString(undefined,{
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            });
                                            return (
                                                <div key={id} className={`flex flex-col justify-between w-full ${styles.articlesDiv} p-4 mx-1 rounded my-3.5 text-left bg-secondary-text-color main-text-color`}>
                                                    <div>
                                                        <h1 className="font-semibold text-lg">{title}</h1>
                                                        <p className="text-sm">{convertedDate}</p>
                                                    </div>

                                                    <div>
                                                        <a className="hover-stand-out-color inline transition-all duration-500 items-center" href={canonical_url}><BsFillEyeFill className="inline-block"/> View Post</a>
                                                        <p className="text-sm secondary-text-color-lighter">#{tags}.</p>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </>
                        }
                    </div>

                <div className="pb-24 sm:pb-0"></div>
            </div>
        </>
    )
}
