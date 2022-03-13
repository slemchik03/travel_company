import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface Props {
    className: string;
    categories: string[];
    currentCategory: string;
    actionCreator: ActionCreatorWithPayload<any>;
}

export const CategorySelector: FC<Props> = props => {
    const dispatch = useDispatch()
    const { categories, currentCategory, className, actionCreator } = props

    return (
        <div className={`categorySelector ${className}`}>
            {
                categories.map((value, index) => {
                    return (
                        <button key={value} className={
                            currentCategory === value ?
                                "categorySelector__btn categorySelector__btn_active" :
                                "categorySelector__btn"
                        }
                            onClick={() => dispatch(actionCreator(value))}
                        >
                            {
                                value.slice(0, 1).toUpperCase() + value.slice(1)
                            }
                        </button>
                    )
                })
            }
        </div>
    )
}