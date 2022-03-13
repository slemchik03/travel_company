import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../../data/destinationsData';
import { Categories, InitialState } from './types';

const initialState: InitialState = {
    destinationsList: data,
    categories: ["advantures", "beath", "popular"],
    currentCategory: "advantures"
}

export const destinationsReducer = createSlice({
    name: "destinations",
    initialState,
    reducers: {
        setCurrentCategory: (state, action: PayloadAction<Categories>) => {
            state.currentCategory = action.payload
        }
    }
})

export const {setCurrentCategory} = destinationsReducer.actions