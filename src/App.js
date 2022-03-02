import { createContext, useState, useEffect } from 'react';
import { watchGeolocation } from './utils';

// Components
import SceneContainer from './threeComponents/SceneContainer';
import LocationButton from './components/LocationButton';
import PositionDisplay from './components/PositionDisplay';

export const PositionContext = createContext({
  current: {},
  setCurrent: () => { },
  car: {},
  setCar: () => { }
});

const App = () => {
  const [current, setCurrent] = useState({});
  const [car, setCar] = useState({});

  useEffect(() => {
    watchGeolocation((location) => setCurrent(location));
  }, []);

  return <main>
    <PositionContext.Provider value={{ current, setCurrent, car, setCar }}>
      <LocationButton setType="setCurrent">Current Position</LocationButton>

      <h3>Current Position</h3>
      <PositionDisplay position={current} />
      <h3>Car Position</h3>
      <PositionDisplay position={car} />

      <SceneContainer />
    </PositionContext.Provider>
  </main >
}

export default App;
