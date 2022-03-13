import { useEffect } from 'react';
import { useGetAboutUsHandlers } from './useGetAboutUsHandlers';

type HookReturnType = {
    className: string
}

type HookType = (
    ref: React.RefObject<HTMLDivElement>,
    currentClassName: string,
    visibleClassName: string
) => HookReturnType

export const useSetAboutUsHandlers: HookType = (
    ref, currentClassName, visibleClassName
) => {
    const {handlers, state} = useGetAboutUsHandlers(ref)

    useEffect(() => {
        window.addEventListener("scroll", handlers.scrollHandler)
        return () => {
            window.removeEventListener("scroll",  handlers.scrollHandler)
        }
    }, [state])

    const className = state.isShowStatistic ?
        `${currentClassName} ${visibleClassName}` :
        `${currentClassName}`

    return {
        className
    }
}