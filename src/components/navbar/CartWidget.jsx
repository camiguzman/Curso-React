
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <>
        <div className="App"  style={{fontSize: '2em', position: 'relative',  left:'14rem',  bottom:'1rem', color:'red'}}>
                   <FontAwesomeIcon icon={faCartPlus}/>
                   
        </div>
        </>
    );
}

export default CartWidget;