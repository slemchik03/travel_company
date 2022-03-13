import { FC } from "react";
import { AboutUs } from "./AboutUs/AboutUs";
import { Destinations } from "./Destinations/Destinations";
import { FlightSelector } from "./FlightSelector/FlightSelector";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { QuoteList } from "./QuoteList/QuoteList";
import { SpecialOffers } from "./SpecialOffers/SpecialOffers";

export const HomePage: FC = () => {
    return (
        <>
            <Header />
            <FlightSelector />
            <SpecialOffers />
            <AboutUs />
            <Destinations />
            <QuoteList />
            <Footer />
        </>
    )
} 