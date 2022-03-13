import { useDispatch } from 'react-redux';
import { setStatisticStatus } from '../../store/reducers/aboutUs/aboutUsReducer';
import { AppDispatch, useSelector } from './../../store/store';

type RefType = React.RefObject<HTMLDivElement>

type ScrollHandler = (
    ref: RefType,
    isShowStatItem: boolean,
    dispatch: AppDispatch,
) => () => void

const scrollHandler: ScrollHandler = (
    ref,
    isShowStatItem,
    dispatch
) => {
    return () => {
        const current = ref.current
        if (
            !isShowStatItem &&
            current &&
            current.getBoundingClientRect().top < 235
        ) {
            dispatch(setStatisticStatus(true))
        }
    }
}


export const useGetAboutUsHandlers = (ref: RefType) => {
    const {isShowStatistic} = useSelector(state => state.aboutUs)
    const dispatch = useDispatch()

    return {
        state: {
            isShowStatistic
        },
        handlers: {
            scrollHandler: scrollHandler(ref, isShowStatistic, dispatch)
        }
    }
}