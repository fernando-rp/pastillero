import { useEffect, useState } from "react";


const Seguimiento=()=>{

    const [products, setProducts] = useState(null)

    useEffect (()=>{

        const getTask = () => {
            fetch('https://private-anon-92a8852349-inventurestest.apiary-mock.com/products', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    setProducts(data['payload']);
                          
                })
                .catch(error => {
                    console.log(error);
                });
        }
       getTask();

    },[])


    return(
        
        <>
        {!!products &&
        products.map((product)=>{
            return(
                <>
                <p className="">{product.name}</p>
                <br/>
                </>
            )
        })}
        </>
    )
}


export default Seguimiento;