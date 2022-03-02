const watchGeolocation = (cb) => {
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

export default watchGeolocation;