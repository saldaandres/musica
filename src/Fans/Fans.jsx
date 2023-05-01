import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Fans.css'
import {Formulario} from "../Formulario/Formulario.jsx";

export function Fans() {
    let preguntas = [
        {
            id: 1,
            pregunta: "Quien fue el baterista original de la banda?",
            opciones: [ "Tony Kenning", "Steve Clark", "Rick Allen", "Jeff Rich"]
        },
        {
            id: 2,
            pregunta: "Donde se presentaron por primera vez en publico?",
            opciones: ["Hammersmith Odeon", "Odeon", "Westfield School", "Youngmen's Working Club"]
        },
        {
            id: 3,
            pregunta: "Cual es el apado de Rick Savage",
            opciones: ["Savage", "Sav", "Rick", "Rick Savage"]
        },
        {
            id: 4,
            pregunta: "En que año se unio Rick Allen a la banda",
            opciones: [1979, 1980, 1977, 1978]
        },
        {
            id: 5,
            pregunta: "Cual fue el nombre de la disquera que los contrató en 1979?",
            opciones: ["Mercury", "Phonogram", "Island", "Bludgeon Riffola"]
        }

    ]

    let buttonList = preguntas.map(pregunta =>
        <div key={"Buton" + pregunta.id} >
            <h2 className={"accordion-header mx-2"}>
                <button className={ (pregunta.id === 1) ? "btn bg-danger" : "btn bg-danger collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapse" + pregunta.id} aria-expanded={pregunta.id === 1} aria-controls={"collapse" + pregunta.id}>
                    {"Pregunta " + pregunta.id}
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
                                        <input type="radio" className="btn-check" name="vbtn-radio" id={"vbtn-radio" + pregunta.id + index} autoComplete="off" />
                                        <label className="btn btn-outline-danger" htmlFor={"vbtn-radio" + pregunta.id + index}>{opcion}</label>
                                    </>
                            )}
                    </div>
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