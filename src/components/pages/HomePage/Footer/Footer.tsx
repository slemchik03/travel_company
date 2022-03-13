import { FC } from "react"
import classes from "./Footer.module.scss"

export const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__inner}>
                    <p className={classes.footer__copyright}>
                        © 2022 Treloo LLC - All right reserved.
                    </p>
                    <div className={classes.footer__nav}>
                        <a href="#a" className={classes.footer__navLink}>Home</a>
                        <a href="#a" className={classes.footer__navLink}>Blog</a>
                        <a href="#a" className={classes.footer__navLink}>Basket</a>
                        <a href="#a" className={classes.footer__navLink}>Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}