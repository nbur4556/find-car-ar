import { useXREvent } from "@react-three/xr";

const UnboundEvents = () => {
    // On Click Screen
    useXREvent('select', () => {
        console.log('select unbounded');
    });

    return null;
}

export default UnboundEvents;