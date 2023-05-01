import React from "react";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

export function Footer() {
    return (
        <section>
            <div className="fila bg-black text-bg-dark">
                <div className={"columna"}>
                    <span><i className={"bi bi-c-circle text-danger"}></i> Def Leppard, 2023</span>
                </div>
                <div className={"columna"}>
                    <span><i className={"bi bi-github text-bg-dark"}></i></span>
                    <span className={"text-danger mx-2 fw-bold"}>//</span>
                    <span>Andres Saldarriaga</span>
                    <span className={"text-danger mx-2 fw-bold"}>//</span>
                    <span><a className={"text-decoration-none link-light"} href="https://www.defleppard.com/">Paginal Real</a></span>
                </div>
            </div>
        </section>
    )
}