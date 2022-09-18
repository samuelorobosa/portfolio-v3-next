const ArticlesReducer = (state, action) => {
    switch (action.type){
        case 'GET_ALL_ARTICLES':
            return {
                ...state,
                blogs: action.payload,
                loading: false,
            }
        case 'GET_ARTICLE_CONTENT':
            return {
                ...state,
                currentArticle: action.payload
            }
        default:
            return state;
    }
}

export default ArticlesReducer;