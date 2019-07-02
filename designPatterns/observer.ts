interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}
interface Observer{
    update(temperature: number);
}

class WeatherStation implements Subject{
    private temperature: number;
    private observers: Observer[] = [];
    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement:' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(o: Observer) {
        this.observers.push(o);
    }
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for(let observers of this.observers){
            observers.update(this.temperature);
        }
    }
}

class TemperatureDisplay implements Observer{
    private subject: Subject;
    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    public update(temperature: number) {
        console.log('TemperatureDisplay: I need to update mu display')
    }  
}
class Fan implements Observer{
    private subject: Subject;

    constructor(weatherStation: Subject){
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    public update(temperature: number) {
        if(temperature > 25){
            console.log('Fan: Its hot in here, turn myself on')
        }else{
            console.log('Fan: its nice and cool, turning myself off')
        }
    }
}

let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(28);
weatherStation.setTemperature(34);