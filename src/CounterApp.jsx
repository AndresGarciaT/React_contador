import { useState } from 'react';
 const CounterApp = () => {
    
    const [counter, setCounter] = useState(0);
    function increment () {
        setCounter (counter + 1)
        
        console.log("Funciona +")
    }
       
    function decrement () {
        setCounter(counter-1)
            
            console. log("Funciona -");
    }
return (
    <>
        <h1>Mi primer contador</h1>
        
        <button onClick={increment}>Incrementar +1</button>
        <h3>{counter}</h3>
        <button onClick={decrement}>Decrementar -1</button>

    </>
)
}
export default CounterApp