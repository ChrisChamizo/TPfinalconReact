/*Importo el css del footer*/
import "./Footer.css"

function Footer() {
    return (
        <section className="redes-botones">
            <div className="iconos-redes">
                <a href="http://es-la.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/chris.chamy_/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="http://wa.me/+541132262737" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="http://x.com/?lang=ES" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </section>
    );
}

export { Footer };
