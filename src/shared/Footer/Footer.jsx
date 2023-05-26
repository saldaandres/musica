import React from "react";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

export function Footer() {
    return (
        <section>
            <div className="fila text-bg-dark fst-italic text-uppercase fs-4">
                <div className={"columna"}>
                    <span><i className={"bi bi-c-circle"}></i> Muse, 2023</span>
                </div>
                <div className={"columna"}>
                    <span><i className={"bi bi-github text-bg-dark"}></i></span>
                    <span className={"mx-2 "}>|</span>
                    <span>Andres Saldarriaga</span>
                </div>
            </div>
        </section>
    )
}