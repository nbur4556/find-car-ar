import { useXREvent } from "@react-three/xr";
import { getGeolocation } from '../utils';

const UnboundEvents = ({ setCarPosition }) => {
    // Set Car Location On Click
    useXREvent('select', () => {
        getGeolocation((location) => {
            setCarPosition(location);
        });
    });

    return null;
}

export default UnboundEvents;