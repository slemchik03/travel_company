import { FC } from "react"

export const Nav: FC = () => {
    return (
        <nav className={"nav"}>
            <a href="/" className="nav__logo">Treloo</a>
            <div className="nav__links">
                <a href="#a" className="nav__link nav__link_active">Home</a>
                <a href="#a" className="nav__link">Blog</a>
                <a href="#a" className="nav__link">Basket</a>
                <a href="#a" className="nav__link">Contact</a>
            </div>
        </nav>
    )
}