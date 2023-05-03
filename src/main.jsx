import React from 'react'
import ReactDOM from 'react-dom/client'


//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import {BrowserRouter} from "react-router-dom";
import {Rutas} from "./Routes/Rutas.jsx"
import {Shop} from "./Shop/Shop.jsx";
import {Members} from "./Members/Members.jsx";
import {Music} from "./Music/Music.jsx";
import {Menu} from "./shared/Menu/Menu.jsx";
import {Footer} from "./shared/Footer/Footer.jsx";
import {Navbar} from "./shared/Navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Rutas />
        <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
