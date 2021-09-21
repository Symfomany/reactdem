import { useState } from 'react'

const Convertisseur = ({temp , modifyTemp}) =>
{
    const [temperature, setTemperature] = useState(temp)
    
    const modify =  (val) =>
    {
        modifyTemp(val)
    }
    
    const conversion = () =>
    {
        setTemperature(temperature * 1.8)
    }
    return(
        <div>
            <p>Temperature est de : {temp} °</p>
            <input type="text" defaultValue={temp}
                onKeyUp={( e ) => modify( e.target.value )} />
            <button onClick={conversion}>Conversion to Farenheit</button>
        </div>
    )
    
}

export default Convertisseur