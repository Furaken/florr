var rock = 17070809
for (let i = rock; i < rock + 58; i++) Module.HEAPU8[i] = 255
let j = 0
setInterval(() => {
    if (!(j < data.length)) return;
    [40, 9, 5, 37, 45, 4, 55, 10].forEach((id, index) => {
        Module.HEAPU8[rock - 1 + id] = (Number("0b" + data[j][index]) == 0 ? 1 : Number("0b" + data[j][index]))
    })
    j++
}, 17) // Actually it is 16.9949788 but setInterval is gay