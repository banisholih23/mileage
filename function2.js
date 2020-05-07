const mileage = (start, end) => {
    let speed = 6
    let distance = 0

    const startDate = new Date(`2020-05-07T${start}`).getTime()
    const endDate = new Date(`2020-05-07T${end}`).getTime()

    const beetween = (endDate - startDate) / 1000

    const minute = (second) => second / 60

    for(let i = 0; i < beetween; i++) {
        if(minute(i) == 5) {
            speed+=2
        }
        if((minute(i) - 5) % 10 == 0) {
            if(minute(i) > 5) {
                speed++
            }
        }
        distance += speed
    }       
    return distance / 1000
}
console.log(mileage(`10:12:21` , `12:00:00`) + ' KM')
 