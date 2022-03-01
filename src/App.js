import { useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
import LocationButton from './components/LocationButton';
import PositionDisplay from './components/PositionDisplay';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState({});
  const [carPosition, setCarPosition] = useState({});

  return <main>
    <LocationButton setPosition={setCurrentPosition}>Current Position</LocationButton>
    <LocationButton setPosition={setCarPosition}>Car Position</LocationButton>

    <h3>Current Position</h3>
    <PositionDisplay position={currentPosition} />
    <h3>Car Position</h3>
    <PositionDisplay position={carPosition} />

    <SceneContainer />
  </main>
}

export default App;
