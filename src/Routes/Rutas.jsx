import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home.jsx";
import {Members} from "../Members/Members.jsx";
import {Historia} from "../Historia/Historia.jsx";
import {Menu} from "../shared/Menu/Menu.jsx";

export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/historia" element={<Historia/>}/>
            <Route path="/integrantes" element={<Members/>}/>
        </Routes>
        </>
    )
}