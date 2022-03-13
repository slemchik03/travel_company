import { FC } from "react"
import { InitialState } from "../../../../../store/reducers/destinations/types"
import destinationnsItemRatingImg from "../../../../../images/Destinations/destinations__itemRatingImg.png"
import classes from "./DestinationsItems.module.scss"

type Props = Omit<InitialState, "categories">

export const DestinationsItems: FC<Props> = ({destinationsList, currentCategory}) => {
    const needleItems = destinationsList.filter((item) => item.catigory === currentCategory)
    return (
        <>
            {
                needleItems.map((item) => {
                    return (
                        <div key={item.title} className={classes.destinations__item}>
                            <div className={classes.destinations__itemPhoto}>
                                <img className={classes.destinations__itemImg} src={item.img} alt="" />
                                <span className={classes.destinations__itemRating}>
                                    <img
                                        className={classes.destinations__itemRatingImg}
                                        src={destinationnsItemRatingImg} alt="img"
                                    />
                                    {item.rating}
                                </span>
                            </div>
                            <div className={classes.destinations__itemInfo}>
                                <p className={classes.destinations__itemTitle}>{item.title}</p>
                                <p className={classes.destinations__itemText}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}