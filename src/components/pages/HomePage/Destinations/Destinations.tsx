import { FC } from "react"
import classes from "./Destinations.module.scss"
import { CategorySelector } from "../../../general/CategorySelector/CategorySelector"
import { setCurrentCategory } from "../../../../store/reducers/destinations/destinationsReducer"
import { useSelector } from "../../../../store/store"
import { DestinationsItems } from "./DestinationsItems/DestinationsItems"

export const Destinations: FC = () => {
    const {
        categories,
        currentCategory,
        destinationsList
    } = useSelector(state => state.destinations)

    return (
        <section className={classes.section}>
            <div className={classes.destinations}>
                <div className="container">
                    <p className={"sectionTitle"}>Recommended Destination</p>
                        <CategorySelector
                            categories={categories}
                            currentCategory={currentCategory}
                            className="destinations__category"
                            actionCreator={setCurrentCategory}
                        />
                    <div className={classes.destinations__inner}>
                        <DestinationsItems
                            destinationsList={destinationsList}
                            currentCategory={currentCategory}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
