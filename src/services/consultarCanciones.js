export async function consultarCanciones(token) {
    // receta para consumir API's

    //1. URL + EP del servicio
    const IDARTISTA = "12Chz98pHFMPJEknJQMWvI"
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`
    const TOKEN = `Bearer ${token}`

    //2. Configuro la peticion
    let peticion= {
        method: "GET",
        headers: {
            "Authorization" : TOKEN,

        }
    }

    //3. Utilizar la promesa FETCH para ir al back y consumir el API
    let respuesta = await fetch(URI, peticion)
    let canciones = await respuesta.json()
    return canciones
}

export async function obtenerToken() {
    const URI = "https://accounts.spotify.com/api/token"

    const options = {
        method: "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body : "grant_type=client_credentials&client_id=2ac3d0a4fbdc4f6ab82251a00ec76093&client_secret=ff4d27295f514c0f8ebb5b6c4739b6d8"
    }

    let respuesta = await fetch(URI, options)
    let token = await respuesta.json()
    return token
}

export async function buscar(token, artista) {
    const URI = `https://api.spotify.com/v1/search?q=${artista}&type=artist`
    const TOKEN = `Bearer ${token}`
    const options = {
        method : "GET",
        headers : {
            Authorization: TOKEN
        }
    }

    let respuesta = await fetch(URI, options)
    let datos = respuesta.json()
    return datos
}