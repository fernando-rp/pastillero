
import img from '../img/medicamento.jpg'

const Banner=()=>{

    return(
        < >
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-10 mx-auto d-flex mt-4">
                        <img className="mx-auto" src={img} alt="..." width="90" height="80"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-10 mx-auto d-flex mt-3">
                        <h4 className="title-banner mx-auto">Revisa tus compras</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-10 mx-auto d-flex mb-4">
                        <h4 className="subtitle-banner mx-auto">Agrega al carro si necesitas reponer</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;