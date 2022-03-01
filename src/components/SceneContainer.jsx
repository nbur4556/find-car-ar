import { DefaultXRControllers, ARCanvas } from '@react-three/xr';
import CarMarker from './CarMarker';
import UnboundEvents from './UnboundEvents';

const SceneContainer = () => {
    return <ARCanvas>
        <ambientLight />
        <CarMarker position={[-5, 0, 0]} />
        <DefaultXRControllers />
        <UnboundEvents />
    </ARCanvas >

}

export default SceneContainer;