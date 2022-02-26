import { useEffect, useRef } from 'react';

// Scene
import initializeScene from './scene/initializeScene';

const App = () => {
  const sceneContainer = useRef(null);

  useEffect(() => {
    initializeScene(sceneContainer.current);
  }, []);

  return <main ref={sceneContainer} />
}

export default App;
