
import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './components/navbar/CartWidget';
let estilos = { color:'violet', background: 'green', paddingLeft: '90'}
const App = () => {
  return (
    <>
    <NavbarComponent />
    <ItemListContainer greeting= {"Bienvenidos"}/>
    
   </>
    
  );
  }
export default App;
