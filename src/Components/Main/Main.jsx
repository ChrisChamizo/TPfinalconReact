/*Este archivo Main.jsx contiene la etiqueta <main/> */
/*Importo el archivo css*/ 
import { Hero } from "../Hero/Hero.jsx";
import { Servicios, SobreMi} from "../Section/Section.jsx";
import { Resumen } from "../Resumen/Resumen.jsx";
import { MiPortafolio } from "../Miportatfolio/Miportafolio.jsx";
import {Formulario} from "../Formulario/Formulario.jsx";



const Main = () => {
    return (
        <div>
            <Hero />
            <SobreMi/>
            <Servicios/>
            <Resumen/>
            <MiPortafolio/>
            <Formulario/>
        </div>
    );
};

export { Main };
