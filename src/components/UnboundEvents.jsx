import { useXREvent } from "@react-three/xr";
import { getGeolocation } from '../utils';

const UnboundEvents = ({ setCarPosition }) => {
    // On Click Screen
    useXREvent('select', () => {
        getGeolocation().then(location => {
            setCarPosition(location);
        });
    });

    return null;
}

export default UnboundEvents;