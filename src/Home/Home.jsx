import {Menu} from "../shared/Menu/Menu.jsx";
import './Home.css'
import {Historia} from "../Historia/Historia.jsx";
import {Footer} from "../shared/Footer/Footer.jsx";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Fans} from "../Fans/Fans.jsx";
import {Formulario} from "../Formulario/Formulario.jsx";

export function Home() {
    return (
        <>
            <div className="banner">
                <Menu />
            </div>
            <Formulario />
            {/*

            3. Tienda. Los productos deben tener los siguientes datos: foto, nombre, precio, descripcion. Tambien
             ponerle un carrusel o un banner.
            */}
            <Footer/>
        </>
    )
}