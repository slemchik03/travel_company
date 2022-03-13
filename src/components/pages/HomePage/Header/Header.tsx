import { FC } from "react";
import { HeaderTop } from "../../../general/HeaderTop/HeaderTop";
import classes from "./Header.module.scss"

export const Header: FC = () => {
    return (
        <header className={classes.header}>
            <HeaderTop />
            <div className={classes.header__bottom}>
                <h1 className={classes.header__title}>Discover Your Life, Travel Where You Want</h1>
                <p className={classes.header__describe}>
                    Would you explore natur paradise in the world, let’s find the best destination in world with us.
                </p>
            </div>
        </header>
    )
}
