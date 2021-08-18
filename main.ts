enum RadioMessage {
    message1 = 49434
}
keyboard.kbEvent(KeyValue.keydiv, function () {
	
})
keyboard.kbEvent(KeyValue.keyequal, function () {
	
})
keyboard.kbEvent(KeyValue.key0, function () {
	
})
keyboard.kbEvent(KeyValue.keydf, function () {
    radio.sendNumber(0)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    keyboard.vibrationMotor(OnOff.ON)
    basic.pause(200)
    keyboard.vibrationMotor(OnOff.OFF)
})
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showLeds(`
    . . . . .
    # # # . .
    # # # # .
    # # # # .
    # # # . .
    `)
basic.forever(function () {
    serial.writeNumber(4)
    serial.writeString("coucou")
})
