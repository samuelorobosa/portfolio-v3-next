import '../styles/globals.css';
import {NavigationProvider} from "../context/NavigationContext/NavigationContext";
import {ArticlesContextProvider} from "../context/ArticlesContext/ArticlesContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return(
      <ArticlesContextProvider>
        <NavigationProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NavigationProvider>
      </ArticlesContextProvider>
  )
}

export default MyApp
