const color = (percentage, colors) => {

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