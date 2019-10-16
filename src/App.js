import React from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';

//import all my components

// function App() {
class App extends React.Component {


  render() {
    return (
      <div className="App" >
        
        <Navbar></Navbar>
        <Jumbotron bgImg="Frankenjura.jpg" title="Todd N. Trivisonno" content="Outdoor Developer.">
        </Jumbotron>
        {/* <Jumbotron bgImg="Frankenjura.jpg" title="Whatever" ></Jumbotron> */}
        <About></About>

      </div >
    );
  }
}
// }

export default App;
