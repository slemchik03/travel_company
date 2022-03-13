import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCurrentPosition } from "../../store/reducers/quotesList/quotesListReducer"
import { setQuoteList } from "../../store/reducers/quotesList/qutesListRequest"
import { QuoteItem } from "../../store/reducers/quotesList/types"
import { useSelector } from "../../store/store"

type HookType = () => [
    QuoteItem[], 
    {
        incrementPositionHandler: () => void,
        decrementPositionHandler: () => void
    }
]

export const useGetQuotes: HookType = ()  => {
    const dispatch = useDispatch()
    const {
        currentPosition,
        quoteList

    } = useSelector(state => state.quotesList)

    const quoteItems = quoteList.slice(currentPosition, currentPosition + 2)


    const incrementPositionHandler = () => {
        dispatch(setCurrentPosition(currentPosition + 2))
    }

    const decrementPositionHandler = () => {
        dispatch(setCurrentPosition(currentPosition - 2))
    }

    useEffect(() => {
        dispatch(setQuoteList())
    }, [])

    return [
        quoteItems, 
        {
            incrementPositionHandler, 
            decrementPositionHandler
        }
    ]   
}