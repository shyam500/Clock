const day = document.querySelector('#day'),
    month = document.querySelector('#month'),
    year = document.querySelector('#year'),
    hour = document.querySelector('#hour'),
    min = document.querySelector('#min'),
    sec = document.querySelector('#sec'),
    ampm = document.querySelector('#ampm');


const monthFunc = m => {
    switch (m) {
        case 0:
            return 'JAN';
        case 1:
            return 'FEB';
        case 2:
            return 'MAR';
        case 3:
            return 'APR';
        case 4:
            return 'MAY';
        case 5:
            return 'JUN';
        case 6:
            return 'JULY';
        case 7:
            return 'AUG';
        case 8:
            return 'SEP';
        case 9:
            return 'OCT';
        case 10:
            return 'NOV';
        case 11:
            return 'DEC';

    }
};

// add zero to the number less than 0 
const addZeroFunc = data => data < 10 ? '0' + data : data;

setInterval(() => {
    const date = new Date();
    day.textContent = addZeroFunc(date.getDate());
    month.textContent = monthFunc(date.getMonth());
    year.textContent = date.getFullYear();
    hour.textContent = addZeroFunc(date.getHours());
    min.textContent = addZeroFunc(date.getMinutes());
    sec.textContent = addZeroFunc(date.getSeconds());
    ampm.textContent = date.getHours() >= 12 ? 'PM' : "AM"
}, 1000);

