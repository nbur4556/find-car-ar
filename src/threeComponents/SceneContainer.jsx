import { useContext } from 'react';
import { DefaultXRControllers, ARCanvas } from '@react-three/xr';

// Components
import CarMarker from './CarMarker';
import UnboundEvents from './UnboundEvents';

// Context
import { PositionContext } from '../App';

const SceneContainer = () => {
    const { setCar } = useContext(PositionContext);

    return <ARCanvas>
        <ambientLight />
        <CarMarker position={[-5, 0, 0]} />
        <DefaultXRControllers />
        <UnboundEvents setCarPosition={setCar} />
    </ARCanvas >

}

export default SceneContainer;