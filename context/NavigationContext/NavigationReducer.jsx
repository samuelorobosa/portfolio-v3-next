const NavigationReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_DROPDOWN':
            return{
                ...state,
                showDropdown: !state.showDropdown
            }
        case 'TOGGLE_DROPDOWN_FALSE':
            return{
                ...state,
                showDropdown: false
            }
        case 'CHECK_PATHNAME':
            return{
                ...state,
                pathName: action.payload
            }
        default:
            return state;
    }
}

export default NavigationReducer;