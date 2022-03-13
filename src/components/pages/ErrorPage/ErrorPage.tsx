import { FC } from "react";

export const ErrorPage: FC = () => {
    return (
        <div className="content">
            <div className="error">
                <h1 className="error__title">404</h1>
                <p className="error__describe">Page not found!</p>
            </div>
        </div>
    )
}