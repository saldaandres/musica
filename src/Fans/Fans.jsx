import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Fans.css'
import {Formulario} from "../Formulario/Formulario.jsx";
import Swal from "sweetalert2";

export function Fans() {

    const [indice, setIndice] = useState(null)
    const[correcta, setCorrecta] = useState(null)

    function actualizarChequeo(index, correcta) {
        if (index == correcta) {
            Swal.fire({
                icon: 'success',
                title: 'Bien hecho'
            })
            return
        }
        Swal.fire({
            icon: "error",
            title: "Te equivocaste"
        })
    }



    let preguntas = [
        {
            id: 1,
            pregunta: "¿Cual de los siguientes NUNCA fue el nombre de la banda?",
            opciones: [ "Gothic Plague", "Psychedelic Porn Crumpets", "Rocket Baby Dolls"],
            correcta: 1
        },
        {
            id: 2,
            pregunta: "¿Cual es el origen del nombre de la cancion Muscle Museum?",
            opciones: ["Era el nombre del gimnasio de Dom Howard", "Una tienda en Teignmouth, Devon", "Son las" +
            " palabras que están antes y después de 'Muse' en el diccionario"],
            correcta: 2
        },
        {
            id: 3,
            pregunta: "¿Donde se grabó el album en vivo Hallabaloo?",
            opciones: ["Le Zenith Paris", "Wembley Stadium", "Old Trafford, Manchester"],
            correcta: 0
        },
        {
            id: 4,
            pregunta: "¿Cual es la primera cancion en el album Showbiz?",
            opciones: ["Muscle Museum", "Cave", "Sunburn"],
            correcta: 2
        },
        {
            id: 5,
            pregunta: "¿A que artista amenazaron con demandar por llamar su show en Las Vegas 'Muse'?",
            opciones: ["Lady Gaga", "Celine Dion", "Queen"],
            correcta: 1
        }

    ]

    let buttonList = preguntas.map(pregunta =>
        <div key={"Buton" + pregunta.id} >
            <h2 className={"accordion-header mx-3 recortado-dos-lados"}>
                <button className={ (pregunta.id === 1) ? "px-5 btn bg-danger" : "px-5 btn bg-danger collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapse" + pregunta.id} aria-expanded={pregunta.id === 1} aria-controls={"collapse" + pregunta.id}>
                    {pregunta.id}
                </button>
            </h2>
        </div>
    )

    let infoList = preguntas.map(pregunta =>
        <div key={"Pregunta" + pregunta.id} className={"text-center"}>
            <div id={"collapse" + pregunta.id} className={ (pregunta.id === 1) ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                <div className="accordion-body row justify-content-center mt-3">
                    <p className={"text-bg-dark fs-4 fw-bold col-12 col-md-4 col-lg-3 align-self-center"}>{pregunta.pregunta}</p>
                    <div className="btn-group-vertical col-8 col-md-3 col-lg-2" role={"group"} aria-label={"Vertical" +
                        " radio toggle" +
                        " button group"}>
                        {pregunta.opciones.map( (opcion, index) =>
                                    <>
                                        <input type="radio" className="btn-check" name="vbtn-radio" id={"vbtn-radio" + pregunta.id + index} autoComplete="off" onClick={() => {
                                            actualizarChequeo(index, pregunta.correcta)
                                        }} />
                                        <label className="btn btn-outline-danger" htmlFor={"vbtn-radio" + pregunta.id + index}>{opcion}</label>
                                    </>
                            )}
                    </div>
                    <div className="resultado"></div>
                </div>
            </div>
        </div>
    )

    return(
        <>
            <div className="accordion row bg-dark p-5 ps-sm-1" id="accordionExample">
                <div className={"d-flex justify-content-center col-12 col-md-8 mx-auto mt-3"}>
                    {buttonList}
                </div>
                {infoList}
            </div>
            <Formulario />
        </>
    )
}