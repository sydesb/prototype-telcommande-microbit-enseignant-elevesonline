enum RadioMessage {
    message1 = 49434,
    test = 2239
}
keyboard.kbEvent(KeyValue.keydiv, function () {
    radio.sendNumber(3)
    affichebienenvoye()
})
keyboard.kbEvent(KeyValue.keyequal, function () {
    radio.sendNumber(2)
    affichebienenvoye()
})
function affichebienenvoye () {
    basic.showIcon(IconNames.Square)
    basic.pause(200)
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.clearScreen()
}
keyboard.kbEvent(KeyValue.key0, function () {
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
keyboard.kbEvent(KeyValue.keydf, function () {
    radio.sendNumber(0)
    affichebienenvoye()
})
serial.setBaudRate(BaudRate.BaudRate115200)
let valeuridprof = 250
basic.showIcon(IconNames.Heart)
keyboard.vibrationMotor(OnOff.ON)
basic.pause(200)
keyboard.vibrationMotor(OnOff.OFF)
basic.pause(0.8)
basic.clearScreen()
basic.forever(function () {
	
})
