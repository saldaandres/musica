import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from "./Home/Home.jsx";

//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import {BrowserRouter} from "react-router-dom";
import {Rutas} from "./Routes/Rutas.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Rutas />
    </BrowserRouter>
  </React.StrictMode>,
)
