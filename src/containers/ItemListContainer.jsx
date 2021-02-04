import ItemCount  from './ItemCount';

import  React,  {useState} from 'react'; 


let estilo = { display: 'flex', justifyContent: 'space-evenly', width: '400px' }

const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h2>{greeting}</h2>
            
            <div className="container">
                <div className="cont">
                    <img className="img" src="https://i.pinimg.com/originals/05/9b/c1/059bc1e9f56d0d4c0748e36ceb76019d.jpg" />
                    <img className="img" src="https://i.pinimg.com/originals/5c/b7/a2/5cb7a2bcb7c2e6cd317859e6aade2e63.jpg" />
                    <section className="container__title">
                        <h1>KISS OF LIFE</h1>
                        <div className="meme">
                            <p>Find clean makeup and skincare products that mix ancient beauty rituals with modern technologies
                        to deliver powerful results.</p>
                            <button className="btn-primary">shop now</button>
                        </div>
                    </section>
                </div>
            </div>
            <div className="landing">
                <section className="landing_uno">
                    <h2>Beauty inspired by real life.</h2>
                    <p>Glossier is a new approach to beauty. It’s about fun and freedom and being OK with yourself today. We
                make intuitive, uncomplicated products designed to live with you.</p>
                </section>
            </div>
            <div id="lista-productos" className="compras__cont">
                <section className="compras__cont_pack">
                    <div className="compras__cont_uno">
                        <div className="productos">
                            <img className="producto"
                                src="images/skincare.jpg"/>
                                <h3>The 3-Step Skincare Routine</h3>
                                <p>cleanser + moisturizer + lip balm</p>
                                <h3 className="precio">$45</h3>
                                <a type="submit" className="addcart" data-id="1"> Add to bag</a>
                                <p> 
                                <ItemCount/>
                                </p>
                        </div>
                    </div>  
                </section>          
            </div>
       </>
    )
}
export default ItemListContainer;