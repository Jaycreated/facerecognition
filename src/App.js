//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { Component } from 'react';


const ParticlesOptions = {
          particles: {
            number: {
              value:30,
              density: {
               enable: true,
               value_area: 800
            }
          }
        }
    }

class App extends Component {
render() {
  return (
    <div className="App">
      <Particles className = 'particles'
         params={ParticlesOptions}
 
  />
        <Navigation/>
       <Logo/>
       <Rank/>
        <ImageLinkForm/>
      {/*<FaceRecogniton/>*/}

    </div>
  );
}
};

export default App;
