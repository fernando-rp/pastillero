
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'


const Navbar=()=>{

    return(
        <div className="container">
            <div className="row mb-2">
                <nav className="navbar nav-container col-md-5 col-sm-10 mx-auto">
                    <button className="navbar-toggler m-2 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-icon"> <FiMenu /> </div>
                    </button>

                    <div className="navbar-title">Mi Pastillero</div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link m-1" href="https://mekiapp.com/" target="_blank" rel="noreferrer">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link m-1" href="https://mekiapp.com/" target="_blank" rel="noreferrer">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex m-1">

                        <div className="navbar-icon p-2"> <AiOutlineSearch /> </div>
                        <div className="navbar-icon p-2"> <AiOutlineShoppingCart /> </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}


export default Navbar;