import {Menu} from "../shared/Menu/Menu.jsx";
import './Home.css'
import {Historia} from "../Historia/Historia.jsx";

export function Home() {
    return (
        <>
            <section className="banner"></section>
            <section>
                <Historia />
            </section>
        </>
    )
}