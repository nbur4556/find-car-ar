const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

export const getGeolocation = (cb) => {
    //! Navigator will not get current position until leaving and returning to page due to busy watching geolocation
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            cb({
                coords: pos.coords,
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