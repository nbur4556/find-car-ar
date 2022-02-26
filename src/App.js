import { useState } from 'react';

// Components
import SceneContainer from './components/SceneContainer';
import XRButton from './components/XRButton';

const App = () => {
  const [showScene, setShowScene] = useState(false);

  return <main>
    <XRButton showScene={showScene} setShowScene={setShowScene} />

    {(showScene) ? <SceneContainer /> : null}
  </main>
}

export default App;
