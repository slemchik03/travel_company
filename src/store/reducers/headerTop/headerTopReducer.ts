import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {
    menuIsOpen: false,
    isSticky: false,
}

export const headerTopReducer = createSlice({
    name: "headerTop",
    initialState,
    reducers: {
        setMenuIsOpenStatus: (state, action: PayloadAction<boolean>) => {
            state.menuIsOpen = action.payload
        },
        setIsStickyStatus: (state, action: PayloadAction<boolean>) => {
            state.isSticky = action.payload
            
        }
    }
})

export const {
    setIsStickyStatus, 
    setMenuIsOpenStatus
} = headerTopReducer.actions
