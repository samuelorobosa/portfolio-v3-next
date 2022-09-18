import {createContext, useReducer} from "react";
import ArticlesReducer from "./ArticlesReducer";


const ArticlesContext = createContext();

export const ArticlesContextProvider = ({children}) =>{
    const initialState = {
        blogs: [],
        currentArticle: null,
        loading: true,
        error: null
    }
    const [state, dispatch] = useReducer(ArticlesReducer, initialState);


    return(
        <ArticlesContext.Provider value={{...state, dispatch}}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext