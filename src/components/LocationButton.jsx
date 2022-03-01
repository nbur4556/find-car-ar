import { useContext } from 'react';
import { PositionContext } from '../App';

const LocationButton = (props) => {
    const position = useContext(PositionContext);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => position[props.setType]({
                coords: pos.coords,
                timestamp: pos.timestamp,
                code: 202,
                msg: 'Success'
            }),
            (err) => position[props.setType]({
                code: err.code,
                msg: err.message
            })
        );
    }

    return <button onClick={getLocation}>{props.children}</button>
}

export default LocationButton;