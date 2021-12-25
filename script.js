class Clock {
    constructor() { 
        this.clockTime = document.getElementById('clockTime');
    };
    getTime() {
        return new Date();
    };

    setTimeFormat() {  
        if (this.clockTime.classList.contains('fullFormat')) {   
            clockFullFormat.render();  
        } else {
            clockShortFormat.render(); 
        };
    };
};

this.clockTime.addEventListener('click', () => {
    this.clockTime.classList.toggle('fullFormat');
});

let clock = new Clock();

class СlockFullFormat extends Clock {
    render() {
        this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
        this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();  
        this.seconds = this.getTime().getSeconds() < 10 ? '0' + this.getTime().getSeconds() : this.getTime().getSeconds();  

        this.clockTime.innerText = this.hours + ":" + this.minutes + ":" + this.seconds;          
    };
};
class СlockShortFormat extends Clock {
    render() {
        this.hours = this.getTime().getHours() < 10 ? '0' + this.getTime().getHours() : this.getTime().getHours();           
        this.minutes = this.getTime().getMinutes() < 10 ? '0' + this.getTime().getMinutes() : this.getTime().getMinutes();          

        this.clockTime.innerText = this.hours + ":" + this.minutes;      
    };
};

let clockFullFormat = new СlockFullFormat();
let clockShortFormat = new СlockShortFormat();

setInterval(() => clock.setTimeFormat(), 250);
