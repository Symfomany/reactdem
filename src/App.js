import logo from './logo-webtech.jpeg';
import './App.css';
import Message from './Message';
import Presentation from './Presentation';
import Liste from './Liste';
import MyButton from './MyButton';

const styles = {
  fontSize: 30,
  color: "blue"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message />
        <Presentation></Presentation>
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


