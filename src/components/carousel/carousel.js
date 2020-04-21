import React from "react";
import { Carousel } from 'antd';



class carousel extends React.Component {
    render() {
        return (
            <Carousel className='carousel' autoplay>
                <div >
                    <h3>
                    Excelencia, Calidad  y Servicio
                    Una carnicería de pueblo con su toque gourmet.
                    
                    </h3>
                </div>
                <div >
                    <h3>
                        Los amantes de la buena carne podrán encontrar una amplia variedad de cortes de excelente textura y suavidad
                    </h3>
                </div>
                <div >
                    <h3>
                    Dentro de cada uno de nuestros productos,
                    y en nuestro propio ADN,
                    está escrita una premisa especial: La búsqueda de la perfección
                    </h3>
                </div>
                <div >
                    <h3>
                        ofrecemos los productos con la máxima calidad,
                        el mejor servicio y las mayores garantías sanitarias.
                    </h3>
                </div>
            </Carousel>

        )
    }
}


export default carousel;