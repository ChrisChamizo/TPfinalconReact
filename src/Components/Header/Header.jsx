/*Importo el css del header*/
import "./Header.css"

/*Creo la funcion Header*/
function Header(){
    return (
        <header>
        <h2>CC</h2>
        <h1>Christian Chamizo</h1>
        <div>
            <button className="inicio">INICIO</button>
            <button>SOBRE MI</button>
            <button>SERVICIOS</button>
            <button>RESUMEN</button>
            <button>PORFOLIO</button>
            <button>CONTACTAME</button>
        </div>
    </header>
);
}

export {Header};
    
 