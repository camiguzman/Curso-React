import './styles.css'

const NavbarComponent = () => {
    return (
        <>
        <h3  style= {{color:'red', fontSize: '29px'}}>Bernardita.</h3>
        <nav> 
            <ul  style= {{display:'flex', justifyContent: 'center', listStyle: 'none', fontSize: '21px'}}>
                <li >
                    <a href="#" className="pepe">Cafes</a>
                </li>
                <li  >
                    <a href="#" className="pepe">Maquinas</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Capsulas</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Gustos</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Compras</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Rebajas</a>
                </li>
                <li>
                    <a href="#" className="pepe" >Vasos</a>
                </li>
            </ul>
        </nav>
    </>    
    );
}
export default NavbarComponent;