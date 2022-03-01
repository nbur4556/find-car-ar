const getGeolocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => resolve({
                coords: pos.coords,
                timestamp: pos.timestamp,
                code: 202,
                msg: 'Success'
            }),
            (err) => reject({
                code: err.code,
                msg: err.message
            })
        );
    })

}

export default getGeolocation;