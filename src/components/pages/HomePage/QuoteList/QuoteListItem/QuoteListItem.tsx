import { FC } from "react";
import { QuoteItem } from "../../../../../store/reducers/quotesList/types";
import classes from "./QuoteListItem.module.scss"

interface Props {
    quoteList: QuoteItem[]
}

export const QuoteListItem: FC<Props> = ({ quoteList }) => {
    return (
        <>
            {
                quoteList.map(item => {
                    return (
                        <div key={item.img} className={classes.quoteListItem}>
                            <p className={classes.quoteListItem__text}>{item.quoteText}</p>
                            <div className={classes.quoteListItem__info}>
                                <span className={classes.quoteListItem__infoTitle}>
                                    {item.quoteInfoTitle}
                                </span>
                                <p className={classes.quoteListItem__infoText}>
                                    {item.quoteInfoText}
                                </p>
                                <img className={classes.quoteListItem__infoImg} src={item.img} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}