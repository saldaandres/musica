import React from "react";
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export function Shop() {
    const imagenes = [
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FbusoAzul.webp?alt=media&token=f27e046c-0326-419c-ad5e-3925193e5cf3",
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2Fllavero.webp?alt=media&token=fe9efeef-e78e-4a14-9205-d754872aaacc" ,
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2Fpocillo.webp?alt=media&token=20dd44d7-5aac-45ff-a5fa-1a26dd7ed2ce"
    ];

    const divList = imagenes.map((imagen, index) =>
        <div key={index} className={index == 0? "carousel-item active" : "carousel-item"} data-bs-interval={"2000"}>
            <img src={imagen} className={"img-fluid"} alt={"producto " + index}/>
        </div>
    )
    return (
        <div className={"row d-flex justify-content-center"}>
            <div id="carouselExampleAutoplaying" className="carousel slide col-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {divList}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}