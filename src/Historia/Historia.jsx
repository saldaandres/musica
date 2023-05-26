import React from "react";
import './Historia.css'

export function Historia() {
    //<editor-fold desc="Historia">
    let historia = [
        {
            fecha: "Inicios",
            eventos: "Muse is an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums). They released their debut album, Showbiz, in 1999, showcasing Bellamy's falsetto and a melancholic alternative rock style. Their second album, Origin of Symmetry (2001), incorporated wider instrumentation and romantic classical influences and earned them a reputation for energetic live performances. Absolution (2003) saw further classical influence, with strings on tracks such as \"Butterflies and Hurricanes\", and was the first of seven consecutive UK number-one albums."
        },
        {
            fecha: "Consolidación",
            eventos: "Black Holes and Revelations (2006) incorporated electronic and pop elements, displayed in" +
                " singles such as 'Supermassive Black Hole', and brought Muse wider international success. The Resistance (2009) and The 2nd Law (2012) explored themes of government oppression and civil uprising and cemented Muse as one of the world's major stadium acts. Rolling Stone stated the band possessed 'stadium-crushing songs'. Topping the US Billboard 200, their seventh album, Drones (2015), was a concept album about drone warfare and returned to a harder rock sound. Their eighth album, Simulation Theory (2018), prominently featured synthesisers and was influenced by science fiction and the simulation hypothesis. Their ninth album, Will of the People (2022), which combined many genres and themes from their previous albums, was released in August 2022."
        },
        {
            fecha: "Premios",
            eventos: "Muse have won numerous awards, including two Grammy Awards, two Brit Awards, five MTV Europe Music Awards and eight NME Awards. In 2012 they received the Ivor Novello Award for International Achievement from the British Academy of Songwriters, Composers and Authors. As of June 2016, they have sold over 30 million albums worldwide."
        }

    ]
    //</editor-fold>

    let divList = historia.map((año) =>
        <div key={año.fecha} className={"col-10 col-md-8 col-lg-7 m-auto"}>
            <div className="año d-flex">
                <h2 className={"flex-grow-0"}>{año.fecha}</h2>
                <span className={"flex-grow-1 bg-black align-self-center linea ms-4"}></span>
            </div>
            <p className={""}>{año.eventos}</p>
        </div>
    )

    return (
        <div className={"bg-dark text-bg-dark p-4"}>
            <h1 className={"text-center"}>Historia</h1>
            <div className="row">
                {divList}
            </div>
        </div>
    )
}