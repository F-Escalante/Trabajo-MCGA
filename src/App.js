import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';

class App extends React.Component{
/*
  constructor(props){
    super(props);
    this.state = {

    };
  }*/
  
  state = {
    titulo: "Mi trabajo de MCGA"
  }

  componentWillMount = () => {
    //console.log('Se está por montar/ dibujar el componente')
  }

  componentDidMount = () => {
    //console.log('Ya se dibujo el componente')
  }

  componentWillReceiveProps(nextProps, nextState){
    //console.log('Se actualiza el componente')
    //console.log(nextState)
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log("state actual: ", this.state)
    //console.log("nuevo state: ", nextState)
    return true;
  }
  
  render() {
   // console.log('Se está dibujando el componente')
    return(
      <div>
      <button onClick={ () => {
        this.setState({titulo: "Hola"})
      }}>Cambiar titulo</button>
      <Card text={this.state.titulo}/>
      </div>
    )
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload Hola que tal.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
