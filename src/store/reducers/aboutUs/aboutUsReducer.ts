import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
    isShowStatistic: false
}

export const aboutUsReducer = createSlice({
    name: "aboutUs",
    initialState,
    reducers: {
        setStatisticStatus: (state, action: PayloadAction<boolean>) => {
            state.isShowStatistic = action.payload
        }
    }
})

export const {setStatisticStatus} = aboutUsReducer.actions