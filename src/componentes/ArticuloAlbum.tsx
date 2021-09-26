import React from "react";

function ArticuloAlbum(props: any) {
  const albumes = props.albumes;

  if (albumes.length === 0) {
    return <div>No hay álbumes :(</div>;
  }

  return (
    albumes.map(function (album:any, i:any) {
      console.log("albumes:", album);
        let urlImage:string = "";
        if(album.images){
          urlImage = album.images[0].url;
        }

        return <article className = "mainArticle" key = { i } >
              <img src = {urlImage} className = "img-article" alt = "imagen álbum"></img>
              <p className = "article-nombre">Nombre: {album.name}</p>
              <p className = "article-fecha">Fecha Lanzamiento: {album.release_date}</p>
          </article>
      })
  );
}

export default ArticuloAlbum;