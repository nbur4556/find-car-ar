import { convertMetersFromLocation } from '../utils';

const CarMarker = ({ currentP, carP }) => {
    if (currentP.coords && carP.coords) {
        const distance = convertMetersFromLocation({
            lat: currentP.coords.latitude,
            lon: currentP.coords.longitude
        }, {
            lat: carP.coords.latitude,
            lon: carP.coords.longitude
        });

        console.log(distance);
    }



    return <mesh position={[-5, 0, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />s
    </mesh>
}

export default CarMarker;