/*Importo el css del section*/
import "./Section.css"
/*Importo la libreria de iconos fontAweSome*/ 
import '@fortawesome/fontawesome-free/css/all.min.css';




/*Creo la funcion de la seccion hero*/
function Hero(){
    return(
        <main>
            <section className="hero">
                <div className="contenedor-contenido-imagen">
                    <div className="hero-content">
                        <h2><i className="fa-solid fa-hand-sparkles"></i> HOLA!, SOY</h2>
                        <div className="profesion">
                            <h2>DISEÑADOR WEB</h2>
                        </div>
                        <div className="nombre">
                            <h1>CHRISTIAN CHAMIZO</h1>
                        </div>
                    </div>
                    <div className="fotopersonal">
                        <img src ="img/fotopersonal.jpg" alt="Foto personal" />
                    </div>
                </div>
            </section>
            
            <div className="parrafo-hero">
                <p>Diseñador web, programador, estudiante de sistemas y más...</p>
            </div>
            
            <section className="redes-botones">
                <div className="iconos-redes">
                    <a href="http://es-la.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/chris.chamy_/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://wa.me/+541132262737"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="http://x.com/?lang=ES"><i className="fa-brands fa-twitter"></i></a>
                </div>
                
                <div className="contenedor-botones">
                    <div className="boton-contactame">
                        <button>Contáctame <span className="arrow">→</span></button>
                    </div>
                    
                    <div className="boton-porfolio">
                        <a href="https://github.com/ChrisChamizo"><button>Porfolio</button></a>
                    </div>
                </div>
            </section>
        </main>
       
    );
};

export {Hero}
    

    
