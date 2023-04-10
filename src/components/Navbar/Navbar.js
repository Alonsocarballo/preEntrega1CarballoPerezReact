import CartWidget from "../CartWidget/CartWidget"
import { Button } from 'react-bootstrap';


const NavBar = () => { 
    return (
        <nav>
            <h3> ECOMMERCE</h3>
            <diV>

                <Button variant="primary">Celulares</Button> 
                <Button variant="primary">Tablets</Button> 
                <Button variant="primary">Notebooks</Button>          

            </diV>
            <CartWidget/>
        </nav>
    )
}

export default NavBar