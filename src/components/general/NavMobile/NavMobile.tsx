import { FC } from "react";

interface Props {
    isOpened: boolean,
    clickHandler: React.MouseEventHandler<HTMLDivElement>
}

export const NavMobile: FC<Props> = ({ isOpened, clickHandler }) => {

    const menuClassName = isOpened ?
        "navMobile__content navMobile__content_active" :
        "navMobile__content"

    return (
        <nav className={"navMobile"}>
            <a href="/" className="navMobile__logo">Treloo</a>
            <div onClick={clickHandler} className="navMobile__button">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={menuClassName}>
                <a href="#a" className="navMobile__contentItem navMobile__contentItem_active">Home</a>
                <a href="#a" className="navMobile__contentItem">Blog</a>
                <a href="#a" className="navMobile__contentItem">Basket</a>
                <a href="#a" className="navMobile__contentItem">Contact</a>
            </div>
        </nav>
    )
}