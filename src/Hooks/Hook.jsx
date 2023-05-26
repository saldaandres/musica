import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from "react";

export function Hook() {
    // antes del retorno configuramos las variables de estado
    const [contador, setContador] = useState(0)

    // programando el detector de ejecuciones
    useEffect(function () {
        setContador(contador + 1)
    }, [])

    // funcion para decir que hacer cuando le de click al boton
    function incrementarCuenta() {
        setContador(contador + 1)
    }

    return (
            <div className="bg-dark text-light p-5">
                <div className="row">
                    <div className="col">
                        <button type={"button"} className={"btn btn-outline-primary"} onClick={incrementarCuenta} >click</button>
                        <h2>La cuenta va en: {contador}</h2>
                    </div>
                </div>
            </div>
    )
}