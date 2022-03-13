import { FC } from "react";
import classes from "./FlightSelector.module.scss"
import flightInfoImg1 from "../../../../images/flightInfo/flightInfoImg1.png"
import flightInfoImg2 from "../../../../images/flightInfo/flightInfoImg2.png"
import flightDateImg1 from "../../../../images/flightInfo/flightInfoDateImg1.png"
import flightDateImg2 from "../../../../images/flightInfo/flightInfoDateImg2.png"


export const FlightSelector: FC = () => {
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.flightSelector}>
                    <div className={classes.flightSelector__top}>
                        <button className={classes.flightSelector__topBtn}>Flights</button>
                        <button className={classes.flightSelector__topBtn}>Hotels</button>
                    </div>
                    <div className={classes.flightSelector__bottom}>
                        <div className={"flightInfo"}>
                            <div className={"flightInfo__block"}>
                                <p className="flightInfo__describe">Leaving from</p>
                                <p className="flightInfo__title">Dubai</p>
                            </div>

                            <img className="flightInfo__img" src={flightInfoImg1} alt="" />

                            <div className={"flightInfo__block"}>
                                <p className="flightInfo__describe">Going to</p>
                                <p className="flightInfo__title">New York</p>
                            </div>
                        </div>
                        <div className={"flightInfo"}>
                            <div className={"flightInfo__block"}>
                                <p className="flightInfo__describe">Leave <img src={flightDateImg1} alt="" /></p>
                                <p className="flightInfo__title">23 Jan, Sat</p>
                            </div>

                            <img className="flightInfo__img" src={flightInfoImg2} alt="" />

                            <div className={"flightInfo__block"}>
                                <p className="flightInfo__describe">Return <img src={flightDateImg2} alt="" /></p>
                                <p className="flightInfo__title">14 Jan, Thu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}