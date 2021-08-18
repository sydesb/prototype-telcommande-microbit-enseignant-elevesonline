enum RadioMessage {
    message1 = 49434,
    test = 2239
}
function affichebienenvoye () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
}
keyboard.kbEvent(KeyValue.key8, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    nbtouchepressee = nbtouchepressee + 1
    if (nbtouchepressee == 1) {
        radio.sendNumber(1)
        affichebienenvoye()
    }
    nbtouchepressee = nbtouchepressee - 1
})
keyboard.kbEvent(KeyValue.key6, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    nbtouchepressee = nbtouchepressee + 1
    if (nbtouchepressee == 1) {
        radio.sendNumber(3)
        affichebienenvoye()
    }
    nbtouchepressee = nbtouchepressee - 1
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    nbtouchepressee = nbtouchepressee + 1
    if (nbtouchepressee == 1) {
        radio.sendNumber(0)
        affichebienenvoye()
    }
    nbtouchepressee = nbtouchepressee - 1
})
keyboard.kbEvent(KeyValue.keyplus, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    nbtouchepressee = nbtouchepressee + 1
    if (nbtouchepressee == 1) {
        radio.sendNumber(2)
        affichebienenvoye()
    }
    nbtouchepressee = nbtouchepressee - 1
})
let nbtouchepressee = 0
serial.setBaudRate(BaudRate.BaudRate115200)
let valeuridprof = 250
nbtouchepressee = 0
basic.showIcon(IconNames.Heart)
keyboard.vibrationMotor(OnOff.ON)
basic.pause(200)
keyboard.vibrationMotor(OnOff.OFF)
basic.pause(0.8)
basic.clearScreen()
basic.forever(function () {
	
})
