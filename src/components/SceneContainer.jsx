import { useEffect, useRef } from 'react';

// Scene
import initializeScene from '../scene/initializeScene';

const SceneContainer = () => {
    const sceneContainer = useRef(null);

    useEffect(() => {
        initializeScene(sceneContainer.current);
    }, []);

    return <div ref={sceneContainer} />
}

export default SceneContainer;