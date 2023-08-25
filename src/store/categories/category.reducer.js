import { CATEGORIES_ACTION_TYPES} from './category.types'; 

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null, 
}


export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true}; //because the moment that we are in a loading state
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: payload, isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, error: payload, isLoading: false};
        default:
            return state;
    }
}