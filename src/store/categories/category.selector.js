
import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => 
    state.categories; //the entire sate as parameters, and returing only the categories slice

export const selectCategories = createSelector(
    [selectCategoriesReducer],  //first is an array of input selectors
    (categoriesSlice) =>  categoriesSlice.categories  //second is the output selector
);  //memoize selector and it takes 2 arguments

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>  
        categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {}) 
)
