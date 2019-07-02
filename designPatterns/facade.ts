class BlurayPlayer {
    on() {
        console.log("Bluray player turning on!");
    }
    turnOff() {
        console.log("Bluray player turning off!");
    }
    play() {
        console.log("Playing bluray disc!");
    }
}

class Amplifier {
    on() {
        console.log("Amp is turning on!");
    }
    turnOff() {
        console.log("Amp turning off");
    }
    setVolume(volumeLevel: number) {
        console.log("Setting volume to" + volumeLevel);
    }
}

class Lights {
    dim() {
        console.log("Lights are dimming");
    }
}

class TV {
    turnOn() {
        console.log("TV turning on");
    }
    turnOff() {
        console.log("TV turning off");
    }
}

class PopcornMaker {
    turnOn() {
        console.log("Popcorn maker turning on");
    }
    turnOff() {
        console.log("Popcorn maker turning off");
    }
    pop(){
        console.log("Popping corn!!!");        
    }
}

class HomeTheatherFacade{
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcorn: PopcornMaker;

    constructor(bluray: BlurayPlayer, amp: Amplifier, lights: Lights, tv: TV, popcorn: PopcornMaker){
        this.amp = amp;
        this.bluray = bluray;
        this.lights = lights;
        this.tv = tv;
        this.popcorn = popcorn;
    }
    public watchMovie(){
        this.popcorn.turnOn();
        this.popcorn.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setVolume(11);
        this.bluray.on();
        this.bluray.play();
    }

    public endMovie(){
        this.popcorn.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcorn = new PopcornMaker();

let hometheather = new HomeTheatherFacade(bluray, amp, lights, tv, popcorn);
hometheather.watchMovie();