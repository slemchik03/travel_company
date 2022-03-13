import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setQuoteList } from './qutesListRequest';
import { InitialState } from "./types";

const initialState: InitialState = {
    quoteList: [],
    currentPosition: 0,
    lastPositionIndex: 0
}


export const quotesListReducer = createSlice({
    name: "quotesList",
    initialState,
    reducers: {
        setCurrentPosition: (state, action: PayloadAction<number>) => {
            const payload = action.payload
            const lastIndex = state.lastPositionIndex
            if (payload >= 0 && payload <= lastIndex) {
                state.currentPosition = payload
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setQuoteList.fulfilled, (state, action) => {
            const payload = action.payload
            state.lastPositionIndex = payload.length && payload.length - 1
            state.quoteList = payload
        })
    }
})


export const {setCurrentPosition} = quotesListReducer.actions