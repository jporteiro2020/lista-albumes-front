import React from 'react';
import { useHistory } from "react-router-dom";
import './header.css';

function Header(){
    let history = useHistory();
    const buscar = (e:any) => {
        console.log(e.target[0].value)
        if(e.target[0].value){
            history.push(`/buscador/${ e.target[0].value }`);
        }else{
            alert("Debe ingresar un valor en el buscador");
        }
    }

    return(
        <header>
            <img src='/spotify-logo.png' alt="Logo" className="logo" />
            <form className="estilo-busqueda busqueda" onSubmit = { buscar }>
                <input type="text" placeholder="Buscar..." id="buscador" />
                <button type = "submit" id="btnBuscador"><i className="fas fa-search"></i></button>
            </form>
        </header>
    );
}

export default Header;