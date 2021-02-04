
import './App.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import CartWidget from './components/navbar/CartWidget';
import ItemCount  from './containers/ItemCount';
import  React,  {useState, useEffect} from 'react'; 


const App = () => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Glossier`;
  });
  return (
    <>
    
    <NavbarComponent />
    <ItemListContainer greeting= {"Bienvenidos"}/>
    <ItemCount/>
    
   </>
    
  );
  }
export default App;
