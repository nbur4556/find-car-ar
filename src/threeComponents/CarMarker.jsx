import { convertMetersFromLocation } from '../utils';

const CarMarker = ({ curCoords, carCoords }) => {
    const d = convertMetersFromLocation({
        lat: curCoords.latitude,
        lon: curCoords.longitude
    }, {
        lat: carCoords.latitude,
        lon: carCoords.longitude
    });

    //TODO: Use view orientation in determining direction
    const xMeters = d.latDirection * d.distance;
    const yMeters = d.lonDirection * d.distance;

    return <mesh position={[xMeters, 0, yMeters]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />s
    </mesh>
}

export default CarMarker;