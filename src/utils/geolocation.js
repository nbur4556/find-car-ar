export const getGeolocation = (cb) => {
    //! Navigator will not get current position until leaving and returning to page due to busy watching geolocation
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            console.log(pos);

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
        })
    );
}

export const watchGeolocation = (cb) => {
    navigator.geolocation.watchPosition(
        (pos) => cb({
            coords: pos.coords,
            timestamp: pos.timestamp,
            code: 202,
            msg: 'Success'
        }),
        (err) => cb({
            code: err.code,
            msg: err.message
        })
    );
}