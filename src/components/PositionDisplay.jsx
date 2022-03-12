const PositionDisplay = ({ position }) => {
    return <ul>
        {(position.code === 202)
            //Success Response
            ? <>
                <li>Lat: {position.coords.latitude}, Lon: {position.coords.longitude}</li>
                <li>Heading: {position.heading}</li>
                <li>Code: {position.code}</li>
                <li>Msg: {position.msg}</li>
                <li>Timestamp: {position.timestamp}</li>
            </>
            // Error Response
            : <>
                <li>Code: {position.code}</li>
                <li>Msg: {position.msg}</li>
            </>}
    </ul>
}

export default PositionDisplay;