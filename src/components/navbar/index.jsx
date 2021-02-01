import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';

const NavbarComponent = () => {
    return (
        <>
        <h3  style= {{color:'blue', fontSize: '29px', display:'flex', justifyContent:'center', left:'10px'}}>Bernardita.</h3>
        <nav> 
            <ul  style= {{display:'flex', justifyContent: 'center', listStyle: 'none', fontSize: '15px'}}>
                <li >
                    <a href="#" className="pepe">CAFES</a>
                </li>
                <li>
                    <a href="#" className="pepe">MAQUINAS</a>
                </li>
                <li>
                    <a href="#" className="pepe" >CAPSULAS</a>
                </li>
                <li>
                    <a href="#" className="pepe" >GUSTOS</a>
                </li>
                <li>
                    <a href="#" className="pepe" >COMPRAS</a>
                </li>
                <li>
                    <a href="#" className="pepe" >REBAJAS</a>
                </li>
                <li>
                    <a href="#" className="pepe" >VASOS</a>
                </li> 
                <li>
                <CartWidget/>     
                </li> 
                </ul>
        </nav>
    </>    
    );
}
export default NavbarComponent;