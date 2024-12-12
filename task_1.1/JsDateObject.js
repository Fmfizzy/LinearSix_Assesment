Date.prototype.daysTo = function (toDate) {

    let difInTime = toDate.getTime() - this.getTime();

    let difInDate = Math.floor(difInTime / (1000 * 3600 * 24))

    return(Math.abs(difInDate));

}

const d2 = new Date('2024/01/07');
const d1 = new Date('2023/01/14');
console.log(d1.daysTo(d2));