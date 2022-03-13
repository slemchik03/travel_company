import { Offer } from '../store/reducers/specialOffers/types';
import specialOffersItem__img1 from "../images/SpecialOffersItem/specialOffersItem__img1.png"
import specialOffersItem__img2 from "../images/SpecialOffersItem/specialOffersItem__img2.png"
import specialOffersItem__img3 from "../images/SpecialOffersItem/specialOffersItem__img3.png"


export const data: Offer[] = [
    {
        type: "relax",
        category: "coupe",
        title: "Laga Sea",
        price: 700,
        date: "12 Ap 2022",
        img: specialOffersItem__img1,
        days: 14
    },
    {
        type: "adventures",
        category: "family",
        title: "Ansgar Scheffold",
        price: 500,
        date: "14 Jun 2022",
        img: specialOffersItem__img2,
        days: 6
    },
    {
        type: "relax",
        category: "coupe",
        title: "Mount Lake",
        price: 600,
        date: "23 Feb 2022",
        img: specialOffersItem__img3,
        days: 6
    },
    {
        type: "adventures",
        category: "team",
        title: "Red Sea",
        price: 800,
        date: "11 Mar 2022",
        img: specialOffersItem__img2,
        days: 7
    },
    {
        type: "relax",
        category: "family",
        title: "Ander Beach",
        price: 1000,
        date: "14 Feb 2022",
        img: specialOffersItem__img1,
        days: 10
    }
]