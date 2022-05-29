import React from "react";

const Seguimiento=(props)=>{

    let userProducts=props.products;
    let idProducts=props.idProduct;
    let userPurchases=props.purchases;

    let details=userPurchases.map((purchase)=>{
        return [purchase.details,purchase.received_date]
    })

    // Función para obtener productos que quedan a la fecha

    function daysBetween(date1String){
        var d1 = new Date(date1String);
        var d2 = new Date();
        return Math.ceil((d2-d1)/(1000*3600*24));
    }

    // Se obtiene la suma total comprada de cada producto

    let productsQuantity=[]
    for (let i = 0; i < userProducts.length; i++) {
        let nProducts=0
        for (let j=0;j<userProducts.length;j++){
            if(userProducts[i][0]===userProducts[j][0]){
                nProducts+=userProducts[j][1]
            }
        }
        productsQuantity.push({"id":userProducts[i][0], "n_products":nProducts}) 
    }

    // Se genera un array resumido con los productos sin repetir y el total comprado a la fecha

    const filterArray=(arr)=>{
        return arr.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
    }

    let productsSummarize = filterArray(productsQuantity)

    // Se genera un array con los id de productos y la fecha de su primera compra
    let productsAndFirstPurchase=[]
    for (let i=0; i<details.length;i++){
        for (let j=0; j<details[i][0].length;j++){
            let id=details[i][0][j].product_id
            //console.log(id)
           productsAndFirstPurchase.push({"id":id,"first_date":details[i][1]})
        }
    }

    let productsAndFirstPurchaseSummarize=filterArray(productsAndFirstPurchase)


    // Se genera array con medicamentos restantes a la fecha de cada producto

    let currentUserProducts=[]
    for (let i=0; i<productsSummarize.length;i++){
        for (let j=0; j<productsAndFirstPurchaseSummarize.length;j++){
            let nDias=daysBetween(productsAndFirstPurchaseSummarize[j].first_date)
            let currentProduct=productsSummarize[j].n_products-nDias;
            if (currentProduct<1) currentProduct=0;
            if(productsSummarize[i].id===productsAndFirstPurchaseSummarize[j].id) currentUserProducts.push([productsSummarize[i].id,currentProduct])    
        }
    }
     
   return(
        
        <>
               {!! currentUserProducts&&
                currentUserProducts.map((producto,index)=>{
                    if(producto[0]===idProducts){
                        return(
                            <>
                                <div key={index}>
                                    <a href="https://mekiapp.com/" target="_blank" rel="noreferrer" className="products-left">Quedan {producto[1]} comprimidos</a>
                                    <br />
                                    <a  href="https://mekiapp.com/" target="_blank" rel="noreferrer" className="days-left">Para {producto[1]} días</a>
                                </div>
                            </>
                        )
                    }
                return null})

               }


        </>
    )
}


export default Seguimiento;