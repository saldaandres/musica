import {useEffect, useState} from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Music.css'
import {consultarCanciones, obtenerToken} from "../services/consultarCanciones.js";

function Reproductor({cancionElegida}) {
    return (
        <div className={"reproductor"} style={{backgroundImage : `url("${cancionElegida.album.images[0].url}")`}}>
            <p>{cancionElegida.name}</p>
        </div>
    )
}

export function Music() {
    const [cancionElegida, setCancionElegida] = useState(null)
    const [canciones, setCanciones] = useState(null)
    const [estaCargando, setEstaCargando] = useState(true)
    const [token, setToken] = useState(null)

    function elegirCancion(evento){
        //evento.stopPropagation()
        setCancionElegida(canciones[evento.currentTarget.id])
        console.log(evento.currentTarget.id)
    }

    function calcularDuracion(milisegundos) {
        let segundosTotales = milisegundos / 1000
        let minutos = Math.floor(segundosTotales / 60)
        let segundos = Math.floor(segundosTotales % 60)
        let segundosDisplay = segundos > 10 ? segundos : `0${segundos}`
        return `${minutos}:${segundosDisplay}`
    }

    useEffect(() => {
        obtenerToken().then(respuesta => {
            setToken(respuesta.access_token)
            console.log(respuesta)
        })
    }, [])

    useEffect(() => {
        if (token) {
            consultarCanciones(token).then(respuesta => {
                setCanciones(respuesta.tracks)
                setCancionElegida(respuesta.tracks[0])
                setEstaCargando(false)
            })
        }
    }, [token])


    if (!canciones) {
        return (
            <>
                <h1>Estoy cargando</h1>
            </>
        )
    }

    let tableRows = canciones.map((cancion, index) =>
        <tr onClick={elegirCancion} key={index} id={index}>
            <td  className={"ocultar"}>{index + 1}</td>
            <td className={"d-flex"}>
                <img src={cancion.album.images[2].url} alt=""/>
                <h6 className={"align-self-center ms-2"}>{ cancion.name}</h6>
            </td>
            <td className={"ocultar"}>
                <p>{ cancion.album.name}</p>
            </td>
            <td>
                {calcularDuracion(cancion.duration_ms)}
            </td>
        </tr>
    )

    return(
        <>
            <Reproductor cancionElegida={cancionElegida}></Reproductor>
            <table className={"table table-dark table-hover table-borderless"}>
                <thead>
                    <tr>
                        <th className={"ocultar"}>#</th>
                        <th>Titulo</th>
                        <th className={"ocultar"}>Album</th>
                        <th><i className={"bi bi-stopwatch"}></i></th>
                    </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>

        </>
    )
}