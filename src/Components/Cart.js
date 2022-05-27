
import { BsFillCartPlusFill } from 'react-icons/bs'

const Cart=()=>{


    const alerta=()=>{
       return (alert("Hola, este es tu pastillero!"))
    }

    return(
        <div className="col-2 cart">
            
                <BsFillCartPlusFill onClick={alerta}/>
            
        </div>
    )

}


export default Cart;