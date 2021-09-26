import React from 'react';
import './Login.css';

function Login(){

    function redireccionar (){
        window.location.href = "http://localhost:4000/login";
    }

    return (
        <main id="main">
            <article id="article-index" className="article-grid">
                <div className="info-bienvenida">
                    <h1>Bienvenido a la APP de listado de Álbumes!!</h1>
                    <p>Haga click en el siguiente botón para poder loguearse y acceder al buscador</p>
                    <button onClick={ (e) => redireccionar() } className="custom-btn btn-2 boton1">Login</button>
                </div>
            </article>
        </main>
    )
}

export default Login;