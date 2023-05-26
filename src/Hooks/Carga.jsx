import {useEffect, useState} from "react";

export function Carga() {

    const [estaCargando, setEstaCargando] = useState(true)
    const [tiempo, setTiempo] = useState(0)

    useEffect(function () {
        setEstaCargando(!estaCargando)
        document.title = estaCargando
    }, [tiempo])

    setTimeout(function () {
        setTiempo(1)
    }, 5000)
    
    if (tiempo === 0){
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className={"img-fluid mx-auto d-block"} src="https://media.tenor.com/1qrYT711uEoAAAAC/cargando.gif" alt=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
    return (
        <>
            <h4>La pagina ya cargó. Bienvenido</h4>
        </>
    )
    
}