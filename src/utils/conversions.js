//TODO: Use higher accuracy conversion algorithm
export const convertMetersFromLocation = (coordsA, coordsB) => {
    // Separation
    const latDiff = coordsA.lat - coordsB.lat;
    const lonDiff = coordsA.lon - coordsB.lon;

    // Convert to Meters
    const latMeters = Math.abs(latDiff * 111139);
    const lonMeters = Math.abs(lonDiff * 111139);
    const distance = Math.sqrt((latMeters * latMeters) + (lonMeters * lonMeters));

    return {
        latDirection: (latMeters / (latMeters + lonMeters)),
        lonDirection: (lonMeters / (latMeters + lonMeters)),
        distance
    };
}