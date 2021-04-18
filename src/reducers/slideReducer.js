

const slidesReducer = (state, event) => {
    switch (event.type) {
        case "NEXT": 
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % event.value.length
            };
        case "PREV":
            return {
                ...state,
                slideIndex: (state.slideIndex + 1) % event.value.length
            };
        case "OPTION_CHANGED":
            return {
                ...state,
                slideIndex: 0
            }
        default: 
            return {
                ...state,
                slideIndex: 0
            } 
        
    }
};

export default slidesReducer;