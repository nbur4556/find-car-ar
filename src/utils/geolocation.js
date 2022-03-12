const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

export const getGeolocation = (cb) => {
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            console.log(pos);

            cb({
                coords: pos.coords,
                heading: pos.coords.heading,
                timestamp: pos.timestamp,
                code: 202,
                msg: 'Success'
            })
        },
        (err) => cb({
            code: err.code,
            msg: err.message
        }),
        options
    );
}