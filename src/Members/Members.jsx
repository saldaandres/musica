import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Members.css'

export function Members() {
    const miembros = [
        {
            id: 1,
            nombre: "Joe Elliot",
            roles: ["voz principal", "coros", "guitarra", "piano"],
            biografia: "En su juventud, Joe fue atrapado por la música de finales de los 60 y principios de los 70" +
                " bandas 'glam' como T.Rex, Mott The Hoople y Ziggy Stardust (David Bowie). El sueño de Joe de ser miembro de la banda imaginaria Deaf Leopard se hizo realidad cuando se unió a Atomic Mass, originalmente formada por Rick Savage y Pete Willis. En parte debido al sueño de Joe, la banda pasó a llamarse Def Leppard.",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FJoeElliot.png?alt=media&token=cc4f639f-5290-4744-926e-e13278359da0"
        },
        {
            id: 2,
            nombre: "Rick Allen",
            roles: ["batería", "percusión", "coros"],
            biografia: "Rick se unió a Def Leppard a la edad de 15 años, justo antes de que la banda firmara su" +
                " contrato discográfico. Perdió su brazo izquierdo en un accidente automovilístico en 1984, pero esto no le impidió ser baterista; con la ayuda de una batería (semi) electrónica, Rick se convirtió en \"un mejor baterista de lo que era cuando tenía dos brazos\" (como dijo Joe Elliott). En 1986, la batería era completamente electrónica, pero desde 1995, algunas partes son acústicas de nuevo, dependiendo de su estudio o entorno en vivo.",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FRickAllen.png?alt=media&token=41454bd5-b975-42a9-8531-1b1e48d418c2"
        },
        {
            id: 3,
            nombre: "Phil Collen",
            roles: ["guitarra", "coros"],
            biografia: "Anterior/Otros Proyectos y Bandas: Rubias tontas, Lucy, Tush, Chica, Cibernautas, Man Raze, Delta Deep\n" +
                "\n" +
                "Phil reemplazó a Pete Willis en 1982 durante las grabaciones de PYROMANIA. Después de la trágica" +
                " muerte de Steve Clark en 1991 y antes de que Vivian Campbell se uniera, Phil se encargó de todas las partes de guitarra durante las grabaciones del álbum ADRENALIZE de 1992. Desde entonces, Phil se desarrolló como uno de los principales compositores de la banda.",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FPhilCollen.png?alt=media&token=04211b00-fbb1-4b43-b415-46820940155e",
        },
        {
            id: 4,
            nombre: "Rick Savage",
            roles: ["bajo", "coros"],
            biografia: "Sav cofundó Atomic Mass junto con Pete Willis y Tony Kenning a finales de los 70, la banda" +
                " que se convertiría en Def Leppard. En su adolescencia, Sav fue considerado un talento futbolístico y se le pidió que se uniera al Sheffield United (a pesar de que era fanático de su rival Sheffield Wednesday), para el que jugó un par de años, pero eligió estar en una banda después de todo.",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FRickSavage.png?alt=media&token=217a0756-72a7-4fa6-bb82-1c3797c3ee00"
        },
        {
            id: 5,
            nombre: "Vivian Campbell",
            roles: ["guitarra", "coros"],
            biografia: "Se le pidió a Vivian que se uniera a Def Leppard en 1992, para llenar el lugar que Steve" +
                " Clark dejó después de su trágica muerte en 1991. Después de ser presentado oficialmente en el concierto de concientización sobre el SIDA de Freddie Mercury en el estadio de Wembley, su primer trabajo fue acompañar a la banda en sus giras ADRENALIZE (1992 y 1993).",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FVivianCampbell.png?alt=media&token=081abbd4-c9cf-4ce6-8242-e8b62d35de4f"
        },
        {
            id: 6,
            nombre: "Steve Clark",
            roles: ["guitarra", "coros"],
            biografia: "Steve se unió a Def Leppard después de ser presentado a la banda por Pete Willis. Uno de los" +
                " apodos de Steve era \"el Riffmaster\", que se ganó después de crear los riffs de guitarra más originales en la historia de Def Leppard (y la historia de la música en general), una y otra vez. Durante las sesiones de ADRENALIZE, Steve murió el 8 de enero de 1991, después de un largo período de lucha contra el alcoholismo.",
            foto: "https://firebasestorage.googleapis.com/v0/b/proyecto-vite-andres.appspot.com/o/defLeppard%2FSteveClark.jpg?alt=media&token=88ea5ead-084f-41e1-978c-dceaa1639e95"
        }
    ]

    const divList = miembros.map((miembro) =>
        <div key={miembro.id}>
            <div className={"miembro col-10 col-md-11 m-auto mt-5 d-flex border-white"}>
                <img className={"card-img w-25"} src={miembro.foto} alt=""/>
                <div className="card-body p-4">
                    <h1 className={"text-bg-dark mb-4 mayuscula"}>{miembro.nombre}</h1>
                    {miembro.roles.map((rol, index) =>
                        <span className={"rol me-2 bg-danger fw-medium px-4 py-2 recortado mayuscula"}>{rol}</span>
                    )}
                    <h3 className={"bg-black text-bg-dark mt-4 px-3 py-2 recortado mayuscula"}>Biografía</h3>
                    <p className={"text-bg-dark"}>{miembro.biografia}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={"row bg-dark row-cols-1 "}>
            {divList}
        </div>
    )
}