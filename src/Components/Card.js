import { useEffect, useState } from "react";
import CardContent from "./CardContent";


const Card=()=>{

    const [allProductss, setAllProductss] = useState(null)
    const [userPurchases, setUserPurchases] = useState(null)

    useEffect (()=>{

        const getAllProducts = () => {
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
                    setAllProductss(data['payload']);

                })
                .catch(error => {
                    console.log(error);
                });
        }

        const getUserPurchases = () => {
            fetch('https://private-anon-92a8852349-inventurestest.apiary-mock.com/purchases', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    setUserPurchases(data['payload']);
                })
                .catch(error => {
                    console.log(error);
                });
        }

       getAllProducts();
       getUserPurchases();

    },[])



    return(
        < >
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-10 mx-auto title-container">
                        <h4 className="title">Te queda</h4>
                    </div>
                </div>

                {/* El siguiente componente recibe la información del Fetch para posteriormente mostrarlo en la pantalla del usario */}
                <CardContent items={allProductss} purchases={userPurchases}/>                

            </div>
        </>
    )
}

export default Card;