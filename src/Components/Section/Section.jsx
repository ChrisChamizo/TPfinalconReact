/*Importo el css del section*/
import "./Section.css"
/*Importo la imagen de la compu*/
import compu from "../../assets/img/compu.jpg"
/*Importo la libreria de iconos fontAweSome*/ 
import '@fortawesome/fontawesome-free/css/all.min.css';


/*Creo la funcion Sobre mi*/ 
function SobreMi() {
    return (
        <section className="sobre-mi">
            <h2>SOBRE MÍ</h2>
            <div className="contenedor-hijo-directo">
                <div className="contenedor-texto-imagen">
                    <div className="contenedor-texto">
                        <h3>
                            Joven apasionado al <span className="highlight">diseño web</span> que ama un diseño lindo, simple y único.
                        </h3>
                        <p>Diseño y desarrollo sitios web para todo tipo de personas interesadas en adquirir alguna.</p>
                        <p>
                            Me especializo en el diseño web y mantenimiento web, aplicando diferentes estilos. También soy
                            programador y disfruto haciendo esto.
                        </p>
                    </div>
                    <div className="contenedor-listas">
                        <ul>
                            <li>Nombre: Christian Chamizo</li>
                            <li>Edad: 26 años</li>
                            <li>Título: Estudiante universitario</li>
                            <li>Dirección: Buenos Aires, Argentina</li>
                            <li>Teléfono: +54 113226-2737</li>
                            <li>Correo electrónico: christianchamizo@live.com.ar</li>
                        </ul>
                    </div>
                    <button className="boton-contactame">
                        Contáctame<span className="arrow">→</span>
                    </button>
                </div>
                <div className="contenedor-imagen fondo-rosa">
                    <img src={compu} alt="Imagen de computadora" />
                </div>
            </div>
        </section>
    );
}

export { SobreMi };

/*Creo la funcion Servicios*/
function Servicios(){
    return (
        <div>
          <section className="servicios">
            <h2>SERVICIOS</h2>
          </section>
    
          <div className="tipo-de-servicios">
            <section className="serviciouno">
              <i className="fa-solid fa-gauge-simple-high"></i>
              <h2>VELOCIDAD & OPTIMIZACION</h2>
              <p>Acelera la <b>Velocidad</b> y <b>Optimiza</b> tu sitio web para una carga más rápida en dispositivos móviles y PC.</p>
            </section>
            
            <section className="serviciodos">
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <h2>BRANDING</h2>
              <p>Tu marca personal de forma rápida y sencilla, especialmente diseñada para ti y tus ideales.</p>
            </section>
            
            <section className="serviciotres">
              <i className="fa-solid fa-stairs"></i><i className="fa-solid fa-signal"></i>
              <h2>SEO & POSICIONAMIENTO</h2>
              <p>Posiciona tu sitio web para obtener mejores resultados cuando busquen tu sitio web.</p>
            </section>
          </div>
        </div>
      );
    };
    
    export {Servicios};
   
