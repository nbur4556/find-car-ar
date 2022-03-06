import { convertMetersFromLocation } from '../utils';

const CarMarker = ({ curCoords, carCoords }) => {
    const d = convertMetersFromLocation({
        lat: curCoords.latitude + 0.005,
        lon: curCoords.longitude + 0.01
    }, {
        lat: carCoords.latitude,
        lon: carCoords.longitude
    });

    const xMeters = d.latDirection * d.distance;
    const yMeters = d.lonDirection * d.distance;

    return <mesh position={[xMeters, yMeters, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />s
    </mesh>
}

export default CarMarker;