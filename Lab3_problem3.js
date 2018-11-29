//import the EventEmitter Module
const EventEmitter = require('events');

//create class that extends the eventemitter
class Gym extends EventEmitter {
    constructor() {
        super()
    }
    //Raise an event with a name 'go' every 1 second
    start() {
        setInterval(() => this.emit('go'), 1000);
    }
}
//init
const gym = new Gym();

//addListner for the event
gym.on('go', () => console.log('Athlete is working out'));
gym.start();

//another option
//Raise an event with a name 'go' every 1 second
//setInterval(()=>gym.emit('go'),1000);







