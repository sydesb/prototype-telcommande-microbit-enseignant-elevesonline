enum RadioMessage {
    message1 = 49434,
    test = 2239
}
keyboard.kbEvent(KeyValue.key1, function () {
    keyboard.setIndexColor(1, 0xff0000)
    radio.sendNumber(3)
    affichebienenvoye()
    keyboard.ledBlank()
})
keyboard.kbEvent(KeyValue.keyminus, function () {
    keyboard.setIndexColor(11, 0xff0000)
    radio.sendNumber(3)
    affichebienenvoye()
    keyboard.ledBlank()
})
keyboard.kbEvent(KeyValue.key5, function () {
    keyboard.setIndexColor(5, 0xff0000)
    radio.sendNumber(2)
    affichebienenvoye()
    keyboard.ledBlank()
})
keyboard.kbEvent(KeyValue.keydiv, function () {
    keyboard.setIndexColor(13, 0xff0000)
    radio.sendNumber(1)
    affichebienenvoye()
    keyboard.ledBlank()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    affichebienenvoye()
})
function affichebienenvoye () {
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    affichebienenvoye()
})
keyboard.kbEvent(KeyValue.key0, function () {
    keyboard.setIndexColor(0, 0xff0000)
    radio.sendNumber(0)
    affichebienenvoye()
    keyboard.ledBlank()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    affichebienenvoye()
})
radio.onReceivedValue(function (name, value) {
    if (name.compare("\"idprof\"") == 0 && value == 250) {
        keyboard.vibrationMotor(OnOff.ON)
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        keyboard.vibrationMotor(OnOff.OFF)
    }
})
keyboard.kbEvent(KeyValue.key3, function () {
    keyboard.setIndexColor(3, 0xff0000)
    radio.sendNumber(3)
    affichebienenvoye()
    keyboard.ledBlank()
})
keyboard.kbEvent(KeyValue.keyplus, function () {
    keyboard.setIndexColor(10, 0xff0000)
    radio.sendNumber(3)
    affichebienenvoye()
    keyboard.ledBlank()
})
keyboard.kbEvent(KeyValue.key2, function () {
    keyboard.setIndexColor(2, 0xff0000)
    radio.sendNumber(3)
    affichebienenvoye()
    keyboard.ledBlank()
})
serial.setBaudRate(BaudRate.BaudRate115200)
keyboard.setBrightness(19)
radio.setGroup(136)
let valeuridprof = 250
let nbtouchepressee = 0
basic.showIcon(IconNames.Heart)
keyboard.vibrationMotor(OnOff.ON)
basic.pause(200)
keyboard.vibrationMotor(OnOff.OFF)
basic.pause(0.8)
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.forever(function () {
	
})
