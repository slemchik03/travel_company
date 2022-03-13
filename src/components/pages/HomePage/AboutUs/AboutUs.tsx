import { FC, useRef } from "react";
import classes from "./AboutUs.module.scss"
import aboutUsImg from "../../../../images/AboutUs/aboutUs__img1.png"
import { useSetAboutUsHandlers } from "../../../../hooks/AboutUs/useSetAboutUsHandlers";

export const AboutUs: FC = () => {
    const aboutUsRef = useRef<HTMLDivElement>(null)
    const { className } = useSetAboutUsHandlers(
        aboutUsRef, 
        classes.aboutUs__statItem, 
        classes.aboutUs__statItem_visible
    )

    return (
        <article>
            <div ref={aboutUsRef} className={classes.aboutUs}>
                <div className="container">
                    <div className={classes.aboutUs__inner}>
                        <div className={classes.aboutUs__photo}>
                            <img className={classes.aboutUs__img} src={aboutUsImg} alt="" />
                            <div style={{ top: "20px", right: "-110px" }}
                                className={className}
                            >
                                <p className={classes.aboutUs__statItemTitle}>300+</p>
                                <p className={classes.aboutUs__statItemText}>Destination</p>
                            </div>
                            <div style={{ top: "400px", left: "-50px" }}
                                className={className}
                            >
                                <p className={classes.aboutUs__statItemTitle}>5000+</p>
                                <p className={classes.aboutUs__statItemText}>Tourists</p>
                            </div>
                            <div style={{ top: "250px", right: "-110px" }}
                                className={className}
                            >
                                <p className={classes.aboutUs__statItemTitle}>150+</p>
                                <p className={classes.aboutUs__statItemText}>Hotels</p>
                            </div>
                        </div>
                        <div className={classes.aboutUs__info}>
                            <h3 className={"sectionTitle " + classes.aboutUs__title}>
                                Travel Any Corner of The World With Us
                            </h3>
                            <p className={classes.aboutUs__text}>
                                Would you explore nature paradise in the world,
                                let’s find the best destination in world with us,
                                Would you explore nature paradise in the world, let’s
                                find the best destination in world with us.
                                Would you explore nature paradise in the world,
                                let’s find the best destination in world with us.
                            </p>
                            <p className={classes.aboutUs__text}>
                                Would you explore nature paradise in the world, let’s
                                find the best destination in world with us.
                            </p>
                            <a className={classes.aboutUs__btn} href="/">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}