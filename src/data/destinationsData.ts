import { DestinationItem } from '../store/reducers/destinations/types';
import destinationnsItemImg1 from "../images/Destinations/destinations__itemImg1.png"
import destinationnsItemImg2 from "../images/Destinations/destinations__itemImg2.png"
import destinationnsItemImg3 from "../images/Destinations/destinations__itemImg3.png"
import destinationnsItemImg4 from "../images/Destinations/destinations__itemImg4.png"

export const data: DestinationItem[] = [
    {
        rating: 4.2,
        catigory: "advantures",
        title: "Peru",
        text: "Very beatiful place.",
        img: destinationnsItemImg1
    },
    {
        rating: 4.9,
        catigory:  "beath",
        title: "San-Fransisco-Beach",
        text: "Very has veru beatiful bridge that connected shore",
        img: destinationnsItemImg3
    },
    {
        rating: 4.0,
        catigory: "beath",
        title: "Maldivi",
        text: "Its just paradice in the all world",
        img: destinationnsItemImg4
    },
    {
        rating: 4.7,
        catigory: "popular",
        title: "Kanada White Lake",
        text: "The most beatiful place in all Kanada",
        img: destinationnsItemImg1
    },
    {
        rating: 4.4,
        catigory: "advantures",
        title: "China Mounts",
        text: "There bery cold, take with you warm clothes",
        img: destinationnsItemImg2
    }

] 