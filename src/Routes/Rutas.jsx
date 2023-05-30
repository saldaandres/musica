import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home.jsx";
import {Members} from "../Members/Members.jsx";
import {Historia} from "../Historia/Historia.jsx";
import {Fans} from "../Fans/Fans";
import {Shop} from "../Shop/Shop.jsx";
import {Carga} from "../Hooks/Carga.jsx";
import {Music} from "../Music/Music";
import {PruebaApi} from "../PruebaApi/PruebaApi.jsx";
import {Search} from "../Search/Search.jsx";


export function Rutas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/historia" element={<Historia/>}/>
                <Route path="/integrantes" element={<Members/>}/>
                <Route path="/fans" element={<Fans />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path={"/hooks"} element={<Carga />} />
                <Route path={"/musica"} element={<Music />} />
                <Route path={"/search"} element={<Search />} />
            </Routes>
        </>
    )
}