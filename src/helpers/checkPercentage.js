let colors = [{ color:'#B7FFBF', value: 50 }, { color:'#95F985', value: 60}, { color:'#4DED30', value: 70}, { color:'#0A7136', value: 80}, { color:'#02491F', value: 90}, { color:'#0B2310', value: 100}]

const color = (percentage) => {

    if (percentage <= 50) { // check the percentage and assign the right color to it
        return colors[0].color
    } else if (percentage <= 60) {
        return colors[1].color // colors are from the color parameter. These colors are assigned in fetch-map.js
    } else if (percentage <= 70) {
        return colors[2].color
    } else if (percentage <= 80) {
        return colors[3].color
    } else if (percentage <= 90) {
        return colors[4].color
    } else if (percentage <= 100) {
        return colors[5].color
    }
    
}

export default color