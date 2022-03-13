import { aboutUsReducer } from './reducers/aboutUs/aboutUsReducer';
import { headerTopReducer } from './reducers/headerTop/headerTopReducer';
import { quotesListReducer } from './reducers/quotesList/quotesListReducer';
import { destinationsReducer } from './reducers/destinations/destinationsReducer';
import { useSelector as useSelectorHook } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { specialOffersReducer } from "./reducers/specialOffers/specialOffersReducer";
import { TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({reducer: {
    headerTop: headerTopReducer.reducer,
    specialOffers: specialOffersReducer.reducer,
    aboutUs: aboutUsReducer.reducer,
    destinations: destinationsReducer.reducer,
    quotesList: quotesListReducer.reducer
}})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelectorHook
export type AppDispatch = typeof store.dispatch  