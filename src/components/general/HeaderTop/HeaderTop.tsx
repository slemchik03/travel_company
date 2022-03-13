import { useRef } from "react"
import { useSetHeaderEventHandler } from "../../../hooks/HeaderTop/useSetHeaderEventHandler"
import { Nav } from "../Nav/Nav"
import { NavMobile } from "../NavMobile/NavMobile"

export const HeaderTop = () => {
    const headerTopRef = useRef<HTMLDivElement>(null)
    const {
        mobileMenuClickHandler,
        mobileMenuIsOpened,
        currentHeaderClassName,
    } = useSetHeaderEventHandler(
        "headerTop",
        "headerTop_fixed",
        headerTopRef
    )

    return (
        <div ref={headerTopRef} className={currentHeaderClassName}>
            <div className="headerTop__inner">
                <div className="container">
                    <Nav />
                    <NavMobile
                        isOpened={mobileMenuIsOpened}
                        clickHandler={mobileMenuClickHandler}
                    />
                </div>
            </div>
        </div>
    )
}