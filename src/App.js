import { createContext, useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
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

  return <main>
    <PositionContext.Provider value={{ current, setCurrent, car, setCar }}>
      <LocationButton setType="setCurrent">Current Position</LocationButton>
      <LocationButton setType="setCar">Car Position</LocationButton>

      <h3>Current Position</h3>
      <PositionDisplay position={current} />
      <h3>Car Position</h3>
      <PositionDisplay position={car} />

      <SceneContainer />
    </PositionContext.Provider>
  </main >
}

export default App;
