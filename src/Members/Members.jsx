import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Members.css'

export function Members() {
    const miembros = [
        {
            id: 1,
            nombre: "Matthew Bellamy",
            roles: ["voz principal", "guitarra", "piano", "compositor"],
            biografia: 'Matthew Bellamy is the driving force behind Muse’s lyrical and musical composition. Popular' +
                ' devices he uses are singing with vibrato and in falsetto ("Supermassive Black Hole," "Knights of Cydonia," "Ruled by Secrecy," "Micro Cuts," and "Showbiz," among others), arpeggiations ("Take a Bow," "Starlight," "Butterflies & Hurricanes," "Ruled by Secrecy," "New Born," "Bliss," "Space Dementia" and "Blockades" among others), and large or octave jumps in melody lines ("Map of the Problematique," "Stockholm Syndrome," "Butterflies & Hurricanes," "Citizen Erased," "The Dark Side", and ", Pressure" among others). Some songs (most notably older ones) express a more esoteric side in terms of guitar riffs and vocals ("Execution Commentary," "Agitated," "Ashamed," "Yes Please," and "Break It to Me" more recently, among others). He also seems to pronounce clearly the hard consonant sound "n" at the beginnings of some phrases when he sings. This has commonly been interpreted as the word "and".',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/9/98/20180603_N%C3%BCrnberg_Rock_im_Park_Muse_0382.jpg'
        },
        {
            id: 2,
            nombre: "Christopher Tony Wolstenholme",
            roles: ["bajo", "teclado", "coros", "guitarra"],
            biografia: 'Chris plays bass and provides backing vocals, as well as the occasional synthesizer lines (such as on Hysteria, Madness and The Void), drums and percussion (Pray, Supremacy, Apocalypse Please). He also sang and wrote two tracks on the sixth studio album (The 2nd Law), When the band started playing Plug In Baby live, he asked for a new set of strings to be put on his bass each time they played it, to get just the right sound he wanted. Chris is a big fan of the Beach Boys. His displayed vocal range goes from G2 to D5, with modal highs up to B♭4 which he has hit several times live during songs as Follow Me and Dead Star. His lowest note was hit during Shepherds Bush Empire in 2013 at the end of Save Me, and his highest can be heard during live performances of Uprising, at the "Come on".',
            foto: "https://i.pinimg.com/736x/fd/72/dc/fd72dc55ad8ae81bf698c7384661d4b9.jpg"
        },
        {
            id: 3,
            nombre: "Dominic Howard",
            roles: ["percusion", "sintetizador", "bateria"],
            biografia: 'Howard was born 7th December 1977 in Stockport, and moved to Devon at 8 years old. He and his family had no interest in music until he went to high school where he became interested in a jazz band, and as a result started playing drums.\n' +
                '\n' +
                'One of Dom\'s earliest memories is of catching a fish and hitting its head on the ground until its eye popped out, an event about which he feels no little shame. (Mark Beaumont, Out of This World: The Story of Muse)\n' +
                '\n' +
                'Dom\'s first memory was sitting on a dingy (a sort of inflatable boat) on a beach in Spain. The dingy was ashore and, without any noticeable cause, popped and deflated with Dom still seated within.\n' +
                '\n' +
                'He became friends with Matt through sharing his Amiga computer with him.',
            foto: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dominic_Howard_at_Estadio_Ciudad_de_La_Plata.jpg",
        }
    ]

    function queHagoConElEvento(evento) {
        evento.target.classList.add("zoom")
    }

    function queHagoCuandoSaleElMouse(evento) {
        evento.target.classList.remove("zoom")
    }

    const divList = miembros.map((miembro) =>
        <div key={miembro.id} className={"col-10 col-md-8 col-lg-7"}>
            <div className={"miembro mx-auto mt-5 border-white"}>
                <img className={"card-img"} src={miembro.foto} alt={miembro.nombre}  />
                <div className="card-body p-4">
                    <h1 className={"text-bg-dark mb-4 mayuscula"}>{miembro.nombre}</h1>
                    <div> {miembro.roles.map((rol, index) =>
                        <p
                            className={"rol me-2 bg-danger fw-medium px-3 py-2 recortado-dos-lados mayuscula d-inline-block"}>{rol}</p>
                    )}</div>
                    <h3 className={"bg-black text-bg-dark mt-4 px-3 py-2 recortado-un-lado mayuscula"}>Biografía</h3>
                    <p className={"text-bg-dark"}>{miembro.biografia}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={"row bg-dark justify-content-center"}>
            {divList}
        </div>
    )
}