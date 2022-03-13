import { InitialState, CategoriesType } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from '../../../data/specialOffersData';

const initialState: InitialState = {
    offers: [
        ...data
    ],
    categories: ["coupe", "family", "team"],
    currentCategory: "family"
}

export const specialOffersReducer = createSlice({
    name: "specialOffers",
    initialState,
    reducers: {
        setCurrentCategory: (state, action: PayloadAction<CategoriesType>) => {
            state.currentCategory = action.payload
        }
    }
})

export const {setCurrentCategory} = specialOffersReducer.actions