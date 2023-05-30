import './Menu.css'
import { Link } from "react-router-dom";


export function Menu() {
    return (
        <>
            <div className="cinta text-light d-flex gap-2 justify-content-center p-2">
                <span className={"bi bi-tiktok"}></span>
                <span className={"bi bi-instagram"}></span>
                <span className={"bi bi-facebook"}></span>
                <span className={"bi bi-spotify"}></span>
            </div>
            <nav className="navbar navbar-expand-lg menu navbar-dark mt-4 fst-italic text-uppercase  fs-4 fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse" aria-controls="navbarLeft navbarRight" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-4 justify-content-end py-1 px-5 col-3" id="navbarLeft">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to={"/integrantes"}>Integrantes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/tienda"}>Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/hooks"}>Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/search"}>Search</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="navbar-brand mx-4 p-0" id={"link-logo"} to={"/"}>
                        <img className={"logo"} src="/src/assets/img/muse.svg"
                            alt="def leppard logo"/>
                    </Link>
                    <div className="collapse navbar-collapse py-1 px-5 col-3" id="navbarRight">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/musica"}>Musica</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/fans"}>Fans</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/pruebaapi"}>Prueba</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}