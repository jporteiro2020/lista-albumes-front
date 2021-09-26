import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SectionAlbumes from './sectionAlbumes';

interface props{
    stringBusqueda: string
}

function ComponenteBuscador({ stringBusqueda }: props){

    const [albumesBusqueda, cambiarAlbumesBusqueda] = useState([]);
    const [accesoNoPermitido, cambiaraccesoNoPermitido] = useState("");
    let history = useHistory();

    useEffect(():any => {
        if(stringBusqueda){
            fetch(`http://localhost:4000/listarAlbumes/?nombreArtista=${stringBusqueda}`, { method: "GET" })
            .then(response => {
                response.json()
                .then((resultadoBusqueda) => {
                    console.log("Respuesta:",resultadoBusqueda.data);
                    if(resultadoBusqueda.data != "Acceso no permitido"){
                        cambiarAlbumesBusqueda(resultadoBusqueda.data);
                    }else{
                        cambiaraccesoNoPermitido(resultadoBusqueda.data);
                    }
                })
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, []);
    
    if(accesoNoPermitido === "Acceso no permitido"){
        history.push('/');
    }

    if(!stringBusqueda){
        return <div>Para buscar álbumes, por favor ingrese el nombre del artista en el buscador</div>;
    }

    if(albumesBusqueda.length > 0){
        return (
            <main id="main">
                <SectionAlbumes 
                    albumes = { albumesBusqueda }
                />
            </main>
        )
    }else{
        return <div>El artista buscado no tiene álbumes disponibles</div>;
    }
}

export default ComponenteBuscador;