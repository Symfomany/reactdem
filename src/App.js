import logo from './logo-webtech.jpeg';
import './App.css';
import Message from './Message';
import Presentation from './Presentation';
import Liste from './Liste';
import MyButton from './MyButton';
import Convertisseur from './Convertisseur';
import { useEffect, useState } from 'react';
import axios from 'axios'
import User from './User';


const styles = {
  fontSize: 30,
  color: "blue"
}


function App ()
{
  const [temp, setTemp] = useState(20)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get( 'https://jsonplaceholder.typicode.com/users' )
      .then( ( res ) =>
    {
      setUsers(res.data)
    } )
  }, [])
  
  const resetTemp = () =>
  {
    setTemp(0)
  }
  const modifyTemp = (val) =>
  {
      setTemp(val)
  }
  
  return (
    <div className="App">
      <header className="App-header">
         <p>Users: {users.length}  utilisateurs</p>
        
        {users.length && users.map( ( user ) => <User email={user.email} name={user.name} /> )}
        {users.length === 0 &&  <p>Loading...</p>}
        <Message />
        <Presentation></Presentation>
        <Convertisseur modifyTemp={modifyTemp} temp={temp} ></Convertisseur>
        <Convertisseur modifyTemp={modifyTemp} temp={temp} ></Convertisseur>
        <Convertisseur modifyTemp={modifyTemp} temp={temp}></Convertisseur>
        <button onClick={resetTemp}>
          Reset Temperature à 0 deg</button>
        
        <MyButton></MyButton>
        <MyButton></MyButton>
        <MyButton></MyButton>
        <MyButton></MyButton>
        
        <Liste prenoms={['Bruno', 'Romain', 'Julien', 'Jean']} />
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles}>
         Bienvenue WebTech à React :)
        </p>
        <ul>
          <li>Julien B. - Software Engineer</li>
          <li>julien@taiwa.fr</li>
        </ul>
      </header>
    </div>
  );
}

export default App;


