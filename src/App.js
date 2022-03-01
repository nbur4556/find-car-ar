import { useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
import XRButton from './components/XRButton';
import LocationButton from './components/LocationButton';
import PositionDisplay from './components/PositionDisplay';

const App = () => {
  const [showScene, setShowScene] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({});
  const [carPosition, setCarPosition] = useState({});

  return <main>
    <XRButton showScene={showScene} setShowScene={setShowScene} />
    <LocationButton setPosition={setCurrentPosition}>Current Position</LocationButton>
    <LocationButton setPosition={setCarPosition}>Car Position</LocationButton>

    <h3>Current Position</h3>
    <PositionDisplay position={currentPosition} />
    <h3>Car Position</h3>
    <PositionDisplay position={carPosition} />

    {(showScene) ? <SceneContainer /> : null}
  </main>
}

export default App;
