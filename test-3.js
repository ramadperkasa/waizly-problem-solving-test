function timeConversion(s) {
    const timeArr = s.split(':');
    const hour = parseInt(timeArr[0], 10);
    const minute = timeArr[1];
    const second = timeArr[2].substring(0, 2); 

    let militaryHour = hour;

    if (s.includes('AM')) {
        if (hour === 12) {
            militaryHour = 0;
        }
    } else {
        if (hour !== 12) {
            militaryHour = hour + 12;
        }
    }

    const militaryHourStr = militaryHour.toString().padStart(2, '0');
    
    return `${militaryHourStr}:${minute}:${second}`;
}

const inputTime = '07:05:45PM';
const militaryTime = timeConversion(inputTime);

console.log(militaryTime);
