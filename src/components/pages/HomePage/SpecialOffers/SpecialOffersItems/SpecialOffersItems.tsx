import { FC } from "react";
import { InitialState } from "../../../../../store/reducers/specialOffers/types";
import classes from "./SpecialOffersItems.module.scss"

type Props = Omit<InitialState, "categories">

export const SpecialOffersItems: FC<Props> = ({ offers, currentCategory }) => {
    const needleOffers = offers.filter(offer => offer.category === currentCategory)
    
    return (
        <>
            {

                needleOffers.length ? needleOffers.map((offer) => {
                    return (
                        <div key={offer.date} className={classes.specialOffers__Item}>

                            <div className={classes.specialOffers__ItemOutlook}>
                                <img className={classes.specialOffers__ItemImg} src={offer.img} alt="" />
                                <p className={classes.specialOffers__ItemDate}>{offer.date}</p>
                            </div>

                            <div className={classes.specialOffers__ItemInfo}>
                                <p className={
                                    classes.specialOffers__ItemType + " " +
                                    classes[`specialOffers__ItemType_${offer.type}`]
                                }>
                                    {offer.type.slice(0, 1).toUpperCase() + offer.type.slice(1)}
                                </p>
                                <p className={classes.specialOffers__ItemDaysCount}>
                                    Days:{offer.days}
                                </p>
                            </div>
                            <div className={classes.specialOffers__ItemMain}>
                                <p className={classes.specialOffers__ItemTitle}>{offer.title}</p>
                                <div className={classes.specialOffers__ItemOrder}>
                                    <p className={classes.specialOffers__ItemPriceInfo}>
                                        <b className={classes.specialOffers__ItemPrice}>{offer.price}$</b>
                                        /Person
                                    </p>
                                    <button className={classes.specialOffers__ItemBtn}>
                                        Book now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }) : <h3 className={classes.specialOffers__content_isEmpty}>Sorry! Content didn`t found!</h3>

            }
        </>
    )
}