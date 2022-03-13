import { FC } from "react"
import classes from "./SpecialOffers.module.scss"
import { setCurrentCategory } from "../../../../store/reducers/specialOffers/specialOffersReducer"
import { CategorySelector } from "../../../general/CategorySelector/CategorySelector"
import { useSelector } from "../../../../store/store"
import { SpecialOffersItems } from "./SpecialOffersItems/SpecialOffersItems"


export const SpecialOffers: FC = () => {
    const { categories, currentCategory, offers } = useSelector(state => state.specialOffers)

    return (
        <section>
            <div className={classes.specialOffers}>
                <div className="container">
                    <p className="sectionTitle">Special Upcoming Offers</p>
                    <div className={classes.specialOffers__inner}>
                        <CategorySelector
                            className="specialOffers__category"
                            categories={categories}
                            currentCategory={currentCategory}
                            actionCreator={setCurrentCategory}
                        />
                        <div className={classes.specialOffers__content}>
                            <SpecialOffersItems
                                offers={offers}
                                currentCategory={currentCategory}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}