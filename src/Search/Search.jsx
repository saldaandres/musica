import {useEffect, useState} from "react";
import {buscar, obtenerToken} from "../services/consultarCanciones.js";

export function Search() {
    const [token, setToken] = useState(null)
    const [palabraBuscar, setPalabraBuscar] = useState(null)
    const [artistas, setArtistas] = useState(null)

    useEffect(() => {
        obtenerToken().then(respuesta => {
            setToken(respuesta.access_token)
        })
    }, [])

    useEffect(() => {
        buscar(token, palabraBuscar).then(respuesta => {
            console.log(respuesta.artists.items)
            setArtistas(respuesta.artists.items)
        })
    }, [palabraBuscar])


    function buscarArtista(evento) {
        evento.preventDefault()
        //console.log(evento.target[0].value)
        setPalabraBuscar(evento.target[0].value)
    }

    if (!token) {
        return  (
            <h2>Sin token</h2>
        )
    }


    if (!artistas) {
        return (
            <div className={"row bg-dark x-auto p-5"} onSubmit={buscarArtista}>
                <form>
                    <label htmlFor="artista"></label>
                    <input name={"artista"} type="text"/>
                    <button type={"submit"}>Buscar</button>
                </form>
            </div>

        )
    }



    return (
        <div className={"row bg-dark text-light x-auto p-5"} onSubmit={buscarArtista}>
            <form>
                <label htmlFor="artista"></label>
                <input name={"artista"} type="text"/>
                <button type={"submit"}>Buscar</button>
            </form>
            {
                artistas.map(artista =>
                    <div className="artista">
                        <img className={"foto_artista"} src={artista.images[0]} alt=""/>
                        <p>{artista.id}</p>
                    </div>
                )
            }
        </div>

    )

}