import { useGetHeaderEventHandler } from './useGetHeaderEventHandler';
import { useEffect } from "react"

interface HookReturnType {
    mobileMenuClickHandler: React.MouseEventHandler<HTMLDivElement>,
    currentHeaderClassName: string,
    mobileMenuIsOpened: boolean,
}

type HookType = (
    headerClassName: string,
    stickyHeaderClassName: string,
    headerRef: React.RefObject<HTMLDivElement>
) => HookReturnType
 
export const useSetHeaderEventHandler: HookType = (
    headerClassName,
    stickyHeaderClassName,
    headerRef
) => {
    const {handlers, state} = useGetHeaderEventHandler(headerRef)
    const {menuIsOpen, isSticky} = state

    useEffect(() => {
        window.addEventListener("scroll", handlers.setStickyStatusHandler)
        window.addEventListener("click", handlers.clickOutsideMenuHandler)
        window.addEventListener("resize",handlers.resetMenuIsOpenStatus) 
    })
 
    const currentHeaderClassName = isSticky ? 
        `${headerClassName} ${stickyHeaderClassName}` :
        `${headerClassName}`

    return {
        mobileMenuIsOpened: menuIsOpen,
        mobileMenuClickHandler: handlers.menuClickHandler,
        currentHeaderClassName
    }
}
