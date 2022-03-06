import { useContext } from 'react';
import { DefaultXRControllers, ARCanvas } from '@react-three/xr';

// Components
import CarMarker from './CarMarker';
import UnboundEvents from './UnboundEvents';

// Context
import { PositionContext } from '../App';

const SceneContainer = () => {
    const { current, car, setCar } = useContext(PositionContext);

    return <ARCanvas>
        <ambientLight />

        {
            (current.coords && car.coords)
                ? <CarMarker curCoords={current.coords} carCoords={car.coords} />
                : null
        }

        <DefaultXRControllers />
        <UnboundEvents setCarPosition={setCar} />
    </ARCanvas >

}

export default SceneContainer;