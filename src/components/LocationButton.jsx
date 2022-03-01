const LocationButton = () => {
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (err) => {
                //TODO: Handle on get position errors
                console.log(err);
            }
        );
    }

    return <button onClick={getLocation}>Get Location</button>
}

export default LocationButton;