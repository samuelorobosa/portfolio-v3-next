import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import styles from "../../styles/SingleArticle.module.scss";


const getAllArticlesSlug = async () => {
    try {
        const res = await fetch("https://dev.to/api/articles/me", {
            headers: {
                "api-key": process.env.DEV_TO_API_KEY
            }
        });
        return await res.json();
    } catch (e) {
        console.log(`Could not get all articles ${e}`)
        return []
    }
}

export const getStaticPaths = async () => {
    const articles = await getAllArticlesSlug();
    const paths = articles.map((article) => ({
        params: { slug: article.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    try {
        const res = await fetch(`https://dev.to/api/articles/samuelorobosa/${slug}`);
        const article = await res.json();

        if (!article || article.error) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                article,
            },
            revalidate: 3600, 
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

export default function SingleArticle({ article }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div className="container mx-auto p-20 text-center">Loading...</div>;
    }

    const { title, body_html, published_at, reading_time_minutes, tags } = article;

    const formattedDate = new Date(published_at).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <>
            <Head>
                <title>{title} | Samuel - Software Developer</title>
                <meta name="description" content={article.description || title} />
            </Head>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.articleWrapper}
            >
                <Link href="/articles">
                    <div className={styles.backButton}>
                        <FiArrowLeft />
                        <span>Back to Articles</span>
                    </div>
                </Link>

                <header className={styles.articleHeader}>
                    {tags && tags.length > 0 && (
                        <div className="flex gap-2 mb-4">
                            {tags.map((tag, i) => (
                                <span key={i} className="text-blue-400 text-xs font-mono">#{tag}</span>
                            ))}
                        </div>
                    )}
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {title}
                    </motion.h1>

                    <div className={styles.meta}>
                        <span title="Published Date">
                            <FiCalendar />
                            {formattedDate}
                        </span>
                        {reading_time_minutes && (
                            <span title="Reading Time">
                                <FiClock />
                                {reading_time_minutes} min read
                            </span>
                        )}
                    </div>
                </header>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: body_html }}
                />

                <footer className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                    <Link href="/articles">
                        <div className={styles.backButton}>
                            <FiArrowLeft />
                            <span>Read more articles</span>
                        </div>
                    </Link>
                    <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-white/40 hover:text-blue-400 transition-colors"
                    >
                        View original on DEV.to
                    </a>
                </footer>
            </motion.div>
        </>
    );
}
