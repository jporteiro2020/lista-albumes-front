import React from "react";
import ArticuloAlbum from './ArticuloAlbum';

function SectionAlbumes(props: any) {
    const albumes = props.albumes;
  
    if (albumes.length === 0) {
        return <div>No hay productos</div>;
    }

    return (
        <section className="album" id="destacados" key = "1">
            {/* <h2>{titulo}</h2> */}
            <div id="divDestacado" className="media-q">
                <ArticuloAlbum albumes = {albumes}/>
            </div>
        </section>
    );
}

export default SectionAlbumes;