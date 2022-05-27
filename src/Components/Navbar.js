
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar=()=>{

    return(
       
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand title" href="#">Mi Pastillero</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    
                </div>
                <form className="d-flex" role="search">
                        
                        <div className="p-2"> <BsSearch/> </div>
                        <div className="p-2"> <AiOutlineShoppingCart/> </div>
                </form>
            </div>
        </nav>
    )

}


export default Navbar;