import { useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
import XRButton from './components/XRButton';
import LocationButton from './components/LocationButton';

const App = () => {
  const [showScene, setShowScene] = useState(false);
  const [position, setPosition] = useState({
    coords: {},
    timestamp: null,
    code: null,
    msg: null
  });

  return <main>
    <XRButton showScene={showScene} setShowScene={setShowScene} />
    <LocationButton setPosition={setPosition} />

    {(position.code === 202)
      //Success Response
      ? <ul>
        <li>Lat: {position.coords.latitude}, Lon: {position.coords.longitude}</li>
        <li>Code: {position.code}</li>
        <li>Msg: {position.msg}</li>
        <li>Timestamp: {position.timestamp}</li>
      </ul>
      // Error Response
      : <ul>
        <li>Code: {position.code}</li>
        <li>Msg: {position.msg}</li>
      </ul>}

    {(showScene) ? <SceneContainer /> : null}
  </main>
}

export default App;
