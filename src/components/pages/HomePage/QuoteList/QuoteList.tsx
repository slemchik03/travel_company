import { FC } from "react";
import classes from "./QuoteList.module.scss"
import { QuoteListItem } from "./QuoteListItem/QuoteListItem";
import arrowLeftImg from "../../../../images/QuoteList/quoteList__arrowLeftImg.png"
import arrowRightImg from "../../../../images/QuoteList/quoteList__arrowRightImg.png"
import { useGetQuotes } from "../../../../hooks/QuoteList/useGetQuotes";

export const QuoteList: FC = () => {
    const [quoteItems, clickHandlers] = useGetQuotes()
    
    return (
        <section className={classes.section}>
            <div className={classes.quoteList}>
                <div className="container">
                    <div className={classes.quoteList__inner}>
                        <QuoteListItem quoteList={quoteItems} />
                    </div>
                </div>
                <div className={classes.quoteList__arrows}>
                    <img
                        onClick={clickHandlers.decrementPositionHandler}
                        className={classes.quoteList__arrowLeft}
                        src={arrowLeftImg} alt=""
                    />
                    <img
                        onClick={clickHandlers.incrementPositionHandler}
                        className={classes.quoteList__arrowRight}
                        src={arrowRightImg} alt=""
                    />
                </div>
            </div>
        </section>
    )
}