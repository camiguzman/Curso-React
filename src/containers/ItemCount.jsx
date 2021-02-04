import  React,  {useState} from 'react'; 

const ItemCount = () => {
    const [count, setCount] = useState(1);
   
    const increment =() => {
        setCount(count +1 )
    };
    
    const decrement = () => {
        setCount(count -1 )
    }   
    return (
        <>
        <div>
            <div>
              <button style= {{padding:'10px', boxShadow: 'white', backgroundColor: 'white', fontWeight: '900', cursor: 'pointer', marginTop: '10px', border: '1px solid black'}}>
                <button className="addcart" onClick=  {decrement}>-</button>
                {count}
                <button className="addcart" onClick= {increment}>+</button>
                </button>  
            </div>
        </div>
        </>
    );
}
export default ItemCount;
