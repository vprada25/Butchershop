import React from "react";
import face from "../../assets/face.png";
import inst from "../../assets/inst.png";
import you from "../../assets/you.png";
import twi from "../../assets/twi.png";



class Footer extends React.Component {
    render() {
        return (
            <div className="footer">

                <div className="footer--content">

                </div>
                <div className="footer--content">

                    <div className="title">Redes Sociales</div>
                    <div className="images">
                        <a href="https://www.facebook.com"> <img src={face} alt='' /></a>
                        <a href="https://www.instagram.com"><img src={inst} alt='' /></a>
                        <a href="https://www.youtube.com"><img src={you} alt='' /></a>
                        <a href="https://twitter.com"><img src={twi} alt='' /></a>
                    </div>
                </div>

                {/* <div className="footer--content">
                    <div className="title">Contactos</div>
                    <br/>
                    <p className="text">
                        <span className="text--title">Telefono:</span> <span></span>
                    </p>
                    <p className="text">
                        <span className="text--title">Direccion:</span> <span></span>
                    </p>
        </div>*/}
            </div>
        );
    }
}

export default Footer;