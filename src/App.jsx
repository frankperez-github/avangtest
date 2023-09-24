import './App.css';
import { useEffect, useState } from "react"


function App() {
    const [joined, setJoined] = useState(false)

    const handleSubmit = ()=>{
        setJoined(true)
    }
    
    return(
        <div className="main" translate="yes">
            <img src={window.innerWidth > 768 ? "/elipse.svg": window.innerWidth > 414 ? "/tabletElipse.svg" : "/mobileElipse.svg"} alt="" className="elipse"/>
            <div className="container" style={{paddingTop: (joined && window.innerWidth <= 768)  && "20%"}}>
                <img src="/logo.svg" alt="logo"  className="logo"/>
                <h1>
                    {
                        !joined ?
                        "¡Pronto llegará Caribbean Payways, la nueva pasarela de pago para la región del Caribe!"
                        :
                        "Gracias por ser de los primeros en unirse"
                    }
                </h1>
                <p>
                    {
                        !joined ?
                    "¿Estás buscando una forma rápida, segura y conveniente de realizar tus transacciones en línea? ¡Caribbean Payways está aquí para hacerte la vida más fácil! Con tecnología de vanguardia y una interfaz intuitiva, Caribbean Payways se convertirá en tu perfecta herramienta para todas tus necesidades de pago en línea."
                        :
                        "Cuando lancemos Caribbean Payways le enviaremos un correo de notificación. ¡Estamos en contacto!"
                    }
                </p>
                {   
                    !joined && 
                    <form action="submit">
                        <input required="true" type="email" name="" id="" placeholder="Introduzca su dirección de correo"/>
                        <button className="siteButton" onClick={handleSubmit}>
                            <div className="buttonContent">
                                <img src="/check.svg" alt="" />
                                <p>Unirme a la lista de espera</p>
                            </div>
                        </button>
                    </form>
                }
            </div>
            <img src="/creditcards.svg" alt="" className="cCards"/>
        </div>
    )
}

export default App;
