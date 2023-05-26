import {obtenerToken} from "../services/consultarCanciones.js";
import {useEffect, useState} from "react";

export function PruebaApi() {
    const [token, setToken] = useState(null)

    useEffect(() => {
        obtenerToken().then(respuesta => {
            setToken(respuesta.access_token)
            console.log(respuesta)
        })
    }, [])

    if (token) {
        return (
            <h2>{token}</h2>
        )
    }

    return(
        <>
            Estoy cargando
        </>
    )
}