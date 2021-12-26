let clockTime = document.getElementById('clockTime');
let clockTime2 = document.getElementById('clockTime2');
let clockTime3 = document.getElementById('clockTime3');

class Clock {
    constructor(e) { 
        this.e = e;
        this.isfullFormat = true;
        this.e.addEventListener('click', () => this.setTimeFormat());
    };

    getTime() {
        let date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();;
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        
        return   this.isfullFormat ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    };

    render() {
        this.e.innerText = this.getTime(); 
    };

    setTimeFormat() {  
        this.isfullFormat = !this.isfullFormat;
    };
};

class FirstClock extends Clock {
    getTime() {
        let date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();;
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let milliSec = date.getMilliseconds();
        
        return   this.isfullFormat ? `${hours}:${minutes}:${seconds}:${milliSec}` : `${hours}:${minutes}`;
    };
};
class SecondClock extends Clock {
    getTime() {
        let date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();;
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let milliSec = date.getMilliseconds();
        
        return   this.isfullFormat ? `${hours}:${minutes}:${seconds}:${milliSec}` : `${hours}:${minutes}:${seconds}`;
    };
};

let clock1 = new Clock(clockTime);
setInterval(() => clock1.render(), 250);

let clock2 = new FirstClock(clockTime2);
setInterval(() => clock2.render(), 250);

let clock3 = new SecondClock(clockTime3);
setInterval(() => clock3.render(), 250); 