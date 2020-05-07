//program menghitung jarak tempuh (UPDATE)

const mileage = (start, end) => { //membuat 2 paramater
    let speed = 6
    let distance = 0
    startDate = new Date(`2020-05-06T${start}`).getTime() / 1000 //menentukan selisih waktu dengan method date
    endDate = new Date(`2020-05-06T${end}`).getTime() / 1000

    let disSecond = endDate - startDate // menghitung hasil selisih waktu

    const minute = (second) => second / 60 // hasil second dibagi 60

    for(let i = 0; i < disSecond; i++) {
        if(minute(i) == 5) { //setelah 5 menit kecepatan dinaikan 
            speed+=2 // kecepatan dinaikan 2ms
        }
        if((minute(i)-5) % 10 == 0) { //setelah 10 menit kecepatan naik
            if(minute(i) > 5) {
                speed++ // kecepatan naik +1
            } 
        }
        distance += speed
    }
    return distance / 1000
}
module.exports = mileage
