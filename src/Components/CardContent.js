
import React from "react"

import Cart from './Cart'
import Seguimiento from "./Seguimiento";

const CardContent=(props)=>{

    let items=props.items;
    let purchases=props.purchases;
    let userProductsIdQuantity=[];      // Este array contiene los productos que el usuario ha comprado, cada elemento del array tiene el id [0] del medicamento más la cantidad comprada [1].
    let userProducts=[];                // Este array contiene los productos comprados y mostrados en la pantalla del usuario.

    if (purchases){
        purchases.map((purchase)=>{
            let userPurchase=purchase.details
            for(let i=0;i<userPurchase.length;i++){
                // Si existen compras se genera un nuevo array con el id del producto y la cantidad comprada.
                userProductsIdQuantity.push([userPurchase[i].product_id,userPurchase[i].quantity]) 
            }
            return null;
        });
    }  

    // De la lista de productos se separan sólo los que son del cliente.
    for (let i=0;i<userProductsIdQuantity.length;i++){
        if(items){
            for(let j=0; j<items.length;j++){
                if(userProductsIdQuantity[i][0]===items[j].id)userProducts.push(items[j])  
            }
        }
    }
    
    // Este array muestra el resumen de los productos comprados sin repetir.
    
    let userSummarizeProducts=userProducts.filter((item,index)=>{       
        return userProducts.indexOf(item)===index;
    }) 

    return(
        <div className="row">
                    <div className="col-md-5 col-sm-10 mx-auto">
                    {!!userSummarizeProducts &&
                    userSummarizeProducts.map((product)=>{
                        return (
                            <div className="card col-12 mb-4" key={product.id} >
                                <div className="row">
                                    <div className="col-3">
                                        <img src={product.imagesUrl} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-7">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.concentration}</p>
                                            {/* El siguiente componente tiene como objetivo mostrar los compromidos restantes para los días que queden */}
                                            <Seguimiento products={userProductsIdQuantity} idProduct={product.id} purchases={purchases}/>
                                        </div>
                                    </div>
                                    <Cart/>
                                </div>
                              <hr/>

                            </div>
                    )})
                    }
                  
                    </div>
                </div>
    )

}

export default CardContent;