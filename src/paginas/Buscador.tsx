import React from "react";
import {
    useParams
} from "react-router-dom";
import ComponenteBuscador from "../componentes/ComponenteBuscador";
import Header from "../componentes/Header";
import './Buscador.css';

interface param{
    stringBusqueda: string
}

function Buscador(){
    let {stringBusqueda}: param = useParams();

    return (
        <>
            <Header />
            <ComponenteBuscador stringBusqueda = { stringBusqueda }/>
        </>
    )
}

export default Buscador;