basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P0, 30)
basic.forever(function () {
    if (input.lightLevel() < 60 || input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 6; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            pins.servoWritePin(AnalogPin.P0, 65)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.servoWritePin(AnalogPin.P0, 10)
            basic.pause(200)
            basic.showIcon(IconNames.SmallHeart)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.servoWritePin(AnalogPin.P0, 30)
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (input.lightLevel() <= 60 || input.buttonIsPressed(Button.A)) {
    	
    } else {
    	
    }
})
