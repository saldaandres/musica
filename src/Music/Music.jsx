import {useEffect, useState} from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Music.css'
import {consultarCanciones, obtenerToken} from "../services/consultarCanciones.js";

function Estrellas({rating}) {
    let numeroEstrellas = Math.round(rating / 20)
    return (
        <div>
            {[...new Array(numeroEstrellas)].map(numero =>
                <span className={"bi bi-star"}> </span>
            )}
        </div>
    )
}

function Reproductor({cancionElegida}) {
    return (
        <div className={"reproductor mx-auto rounded-5 d-flex flex-column justify-content-end align-items-center" +
            " py-2"} style={{backgroundImage : `url("${cancionElegida.album.images[0].url}")`}}>
            <h3 className={"text-light"}>{cancionElegida.name}</h3>
            <audio controls src={cancionElegida.preview_url}></audio>
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
        let segundosDisplay = segundos >= 10 ? segundos : `0${segundos}`
        return `${minutos}:${segundosDisplay}`
    }

    useEffect(() => {
        obtenerToken().then(respuesta => {
            setToken(respuesta.access_token)
            //console.log(respuesta)
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
            <td className={"ocultar"}>
                    <Estrellas rating={cancion.popularity}></Estrellas>
            </td>
            <td>
                {calcularDuracion(cancion.duration_ms)}
            </td>
        </tr>
    )

    return(
        <div className={"bg-dark py-5"}>
            <Reproductor cancionElegida={cancionElegida}></Reproductor>
            <table className={"table table-dark table-hover table-borderless"}>
                <thead>
                    <tr>
                        <th className={"ocultar"}>#</th>
                        <th>Titulo</th>
                        <th className={"ocultar"}>Album</th>
                        <th className={"ocultar"}>Popularidad</th>
                        <th><i className={"bi bi-stopwatch"}></i></th>
                    </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        </div>
    )
}