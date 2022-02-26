import { useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
import XRButton from './components/XRButton';

const App = () => {
  const [showScene, setShowScene] = useState(false);

  return <main>
    <XRButton showScene={showScene} setShowScene={setShowScene} />

    {(showScene) ? <SceneContainer /> : <h1>No Scene</h1>}
  </main>
}

export default App;
