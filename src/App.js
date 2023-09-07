
import './App.css';
import Weather from './Weather';


function App() {
  return (
    <div className="App">
      <div className='container'>

        
        <Weather defaultCity="New York"/>
        <footer>
           This project was coded by Amy Gathoni and is {' '}
        
          <a href='https://github.com/19Amy/react-weather-app' target='_blank' rel="noreferrer">
             open sourced on GitHub
          </a>
        
        </footer>

      </div>
      
      
    </div>
  );
}

export default App;
