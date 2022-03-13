import { RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { setIsStickyStatus, setMenuIsOpenStatus } from '../../store/reducers/headerTop/headerTopReducer';
import { useSelector, AppDispatch } from '../../store/store';

type MenuHandler<T = () => void> = (
    menuIsOpen: boolean, 
    dispatch: AppDispatch,
) => T

type MenuClickHandler = MenuHandler
type ClickOutsideMenuHandler = MenuHandler<(e: any) => void>
type ResetMenuIsOpenStatus = MenuHandler

type HeaderStickyHandler<T = () => void> = (
    ref: React.RefObject<HTMLDivElement>,
    isSticky: boolean,
    dispatch: AppDispatch
) => T
type SetStickyStatusHandler = HeaderStickyHandler

const menuClickHandler: MenuClickHandler = (
    menuIsOpen, dispatch
) => {
    return () => {
        const bodyStyles = document.body.style
        // Show or hide scrollbar if menu open or closed
        if (!menuIsOpen) bodyStyles.overflowY = "hidden"
        else bodyStyles.overflowY = "visible"
        dispatch(setMenuIsOpenStatus(!menuIsOpen))
    }
}   


const clickOutsideMenuHandler: ClickOutsideMenuHandler = (
    menuIsOpen, dispatch
) => {
    return (e: any) => {
        const className = e.target?.className
        // if user click outside mobile menu content close it        
        if (menuIsOpen && !className.includes("navMobile")) {
                document.body.style.overflowY = "visible"
                dispatch(setMenuIsOpenStatus(false))
        }
    }
}

const resetMenuIsOpenStatus: ResetMenuIsOpenStatus = (
    menuIsOpen, dispatch
) => {
    return () => {
        const screenWidth = window.innerWidth
        /*
            If user open menu on window with small size and 
            resize it to more larger scale, then we close menu
            and show scrollbar
        */
        if (menuIsOpen && screenWidth >= 1200) {
                document.body.style.overflowY = "visible"
                dispatch(setMenuIsOpenStatus(false)) 
        }
        console.log(menuIsOpen);
        
    }
}
     

const setStickyStatusHandler: SetStickyStatusHandler = (
    ref: React.RefObject<HTMLDivElement>,
    isSticky,
    dispatch
) => {
    return () => {
        const current = ref.current
        const condition = !!(current && current.getBoundingClientRect().top <= -170)
        if (condition !== isSticky) {
            dispatch(setIsStickyStatus(condition))
        }
    }
}

export const useGetHeaderEventHandler = (ref: RefObject<HTMLDivElement>) => {
    const {menuIsOpen, isSticky} = useSelector(state => state.headerTop)
    const dispatch = useDispatch()

    return {
        state: {
            menuIsOpen,
            isSticky,
        },
        handlers: {
            menuClickHandler: menuClickHandler(menuIsOpen, dispatch),
            setStickyStatusHandler: setStickyStatusHandler(ref, isSticky, dispatch),
            resetMenuIsOpenStatus: resetMenuIsOpenStatus(menuIsOpen, dispatch),
            clickOutsideMenuHandler: clickOutsideMenuHandler(menuIsOpen, dispatch)
        } 
    }
}