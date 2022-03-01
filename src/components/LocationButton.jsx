const LocationButton = ({ setPosition }) => {
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => setPosition({
                coords: pos.coords,
                timestamp: pos.timestamp,
                code: 202,
                msg: 'Success'
            }),
            (err) => setPosition({
                code: err.code,
                msg: err.message
            })
        );
    }

    return <button onClick={getLocation}>Get Location</button>
}

export default LocationButton;