import { createContext, useState, useEffect } from 'react';
import { getGeolocation } from './utils';

// Components
import SceneContainer from './threeComponents/SceneContainer';
import PositionDisplay from './components/PositionDisplay';

export const PositionContext = createContext({
  current: {},
  setCurrent: () => { },
  car: {},
  setCar: () => { }
});

const App = () => {
  //TODO: Periodically update current position
  const [current, setCurrent] = useState({});
  const [car, setCar] = useState({});

  useEffect(() => {
    getGeolocation((location) => setCurrent(location));
  }, []);

  return <main>
    <PositionContext.Provider value={{ current, setCurrent, car, setCar }}>
      <h3>Current Position</h3>
      <PositionDisplay position={current} />
      <h3>Car Position</h3>
      <PositionDisplay position={car} />

      <SceneContainer />
    </PositionContext.Provider>
  </main >
}

export default App;
