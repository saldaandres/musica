import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home.jsx";
import {Members} from "../Members/Members.jsx";
import {Historia} from "../Historia/Historia.jsx";
import {Fans} from "../Fans/Fans";
import {Shop} from "../Shop/Shop.jsx";

export function Rutas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/historia" element={<Historia/>}/>
                <Route path="/integrantes" element={<Members/>}/>
                <Route path="/fans" element={<Fans />}></Route>
                <Route path="/tienda" element={<Shop />}></Route>
            </Routes>
        </>
    )
}