import logo from './logo.svg';
import './App.css';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <div className="App">
        <AnimatedBackground
          animationName="geometricShapes"
          blendMode="lighten"
        />
        <h1>Hello World!</h1>
    </div>
  );
}

export default App;
