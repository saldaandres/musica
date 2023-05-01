import './Menu.css'
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            <div className="cinta"></div>
            <nav className="navbar navbar-expand-lg menu navbar-dark mt-0 fst-italic text-uppercase  fs-4 sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse" aria-controls="navbarLeft navbarRight" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-4 justify-content-end py-1 px-5" id="navbarLeft">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to={"/integrantes"}>Integrantes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/tienda"}>Tienda</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="navbar-brand mx-4 p-0" id={"link-logo"} to={"/"}>
                        <img className={"logo"} src="https://www.defleppard.com/wp-content/themes/def/images/logo.png"
                            alt="def leppard logo"/>
                    </Link>
                    <div className="collapse navbar-collapse py-1 px-5" id="navbarRight">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/musica"}>Musica</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/fans"}>Fans</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}