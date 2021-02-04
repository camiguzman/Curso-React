import './styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './CartWidget';
import { useState } from 'react';

const NavbarComponent = () => {
   
    return (
        <>
       
        <h3  style= {{color:'black', fontSize: '29px', display:'flex', justifyContent:'center', left:'10px'}}>Glossier.</h3>
        <nav> 
            <ul  style= {{display:'flex', justifyContent: 'center', listStyle: 'none', fontSize: '15px'}}>
                <li >
                    <a href="#" className="pepe">Fragancias</a>
                </li>
                <li>
                    <a href="#" className="pepe">Body</a>
                </li>
                <li>
                    <a href="#" className="pepe" >EndlessWEAR</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Make Up</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Rebajas</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Contact</a>
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