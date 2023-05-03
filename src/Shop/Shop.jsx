import React from "react";
import './Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export function Shop() {
    const imagenesBanner = [
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FbusoAzul.webp?alt=media&token=f27e046c-0326-419c-ad5e-3925193e5cf3",
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2Fllavero.webp?alt=media&token=fe9efeef-e78e-4a14-9205-d754872aaacc" ,
        "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2Fpocillo.webp?alt=media&token=20dd44d7-5aac-45ff-a5fa-1a26dd7ed2ce"
    ];

    const productos = [
        {
            id: 1,
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FProductos%2Fvinilos-diamond-start.webp?alt=media&token=20e3c46c-05df-4f4e-bf80-be5ff346658c",
            nombre: "2 Vinilos - Diamond Star Halos - Edicion Standar",
            descripcion: "Diamond Star Halos es el nuevo álbum de Def Leppard, el primero desde su disco" +
                " autotitulado en 2015. Compuesto por la banda durante los últimos dos años, cuenta con 15 temas.",
            precio: 248000
        },
        {
            id: 2,
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FProductos%2Fvinilo-hagh-n-dry.webp?alt=media&token=61aa130e-2396-48f3-8316-5878def2fd9e",
            nombre: "Vinilo High 'N' Dry",
            descripcion: "El álbum está plagado de buenos temas, con riffs de calidad del dúo Pete Willis - Steve Clark y" +
                " letras que narran historias cotidianas.",
            precio: 135000
        },
        {
            id: 3,
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FProductos%2Fcamiseta-shattered.webp?alt=media&token=0d3ac45c-6788-4c2d-bf7a-9e1366b54713",
            nombre: "Camiseta Shattered LS",
            descripcion: "• 100% Algodón tejido\n" +
                "• Fit Unisex\n" +
                "\n" +
                "Tenga en cuenta que, si compra productos en preventa junto con artículos disponibles para entrega" +
                " inmediata en el mismo carrito, su pedido completo se enviará cuando el último producto esté disponible.\n",
            precio: 249000
        },
        {
            id: 4,
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FProductos%2FZippo.webp?alt=media&token=d59c82f1-f4c9-4324-9f64-fe5bbbe75e50",
            nombre: "Encendedor Def Leppard",
            descripcion: "Latón pulido, encendedor Zippo collecionable con detalle de grabado del logotipo de Def Leppard en la parte delantera",
            precio: 200000
        },
        {
            id: 5,
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FProductos%2Fgorra-piromania.webp?alt=media&token=b6571e59-ff8d-4499-9e0e-f17effabbe68",
            nombre: "Gorra piromania",
            descripcion: "Gorra NEGRa CON ILUSTRACIONES DE DEF LEPPARD PYROMANIA IMPRESAS EN LA PARTE DELANTERA.",
            precio: "130000"
        }
    ]

    const productosCards = productos.map( producto =>
        <div className={"card bg-dark"} key={producto.id}>
            <img src={producto.foto} className={"card-img-top"} alt={producto.nombre}/>
            <div className="card-body text-bg-dark">
                <h4 className="card-title my-2 border-danger-subtle">{ "$" + producto.precio}</h4>
                <h5 className="card-subtitle text-capitalize my-2 text-danger">{producto.nombre}</h5>
                <p className="card-text my-2 text-uppercase">{producto.descripcion}</p>
            </div>
        </div>
    )

    const itemsCarrusel = imagenesBanner.map((imagen, index) =>
        <div key={index} className={index == 0? "carousel-item active" : "carousel-item"} data-bs-interval={"2000"}>
            <img src={imagen} className={"img-fluid"} alt={"producto " + index}/>
        </div>
    )


    return (
        <div className="contenedor bg-dark p-5">
            // carrusel
            <div className={"row d-flex justify-content-center"}>
                <div id="carouselExampleAutoplaying" className="carousel slide col-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {itemsCarrusel}
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

            <div className={"row gap-3 justify-content-center"}>
                {productosCards}
            </div>
        </div>

    )

}