function mapChooser(locationName) {
    // ! will test for falsy value when converted to Boolean
    // includes undefined, empty string, 0, null and not a number
    if(!locationName)
    {
        locationName= 'default';
    }
    let imageName = locationName + '.jpg'
    return (imageName)
}

export default mapChooser;