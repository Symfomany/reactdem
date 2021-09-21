import { useState } from 'react'

const MyButton = () =>
{
    let [counter, setCounter] = useState(0) 
    
    let cl = 'red'
    if ( counter > 5 && counter < 10 )
    {
       cl = 'orange' 
    } else if ( counter >= 10 )
    {
        cl = 'green'
    }
    const styles = {
        background: cl,
        padding: 10,
        border: 'none',
        color: "white"
    }
    
    return (
        <div>
            <button onClick={() => setCounter(counter++)} style={styles}>Ajouter un +1 <span style={{ color: "red" }}>{counter}</span></button>
            {counter >= 5 && <p>Bingo !</p>}
        </div>
    )
}

export default MyButton