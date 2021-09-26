input.onPinPressed(TouchPin.P0, function () {
    Alter += 1
    if (Alter > 18) {
        Alter = 11
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(Alter)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P3, function () {
    Meter += 86
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    Geschlecht = 2
    basic.setLedColor(0x007fff)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("Ergebnis:")
    basic.showNumber(Meter)
    basic.showString("Meter;")
    basic.pause(500)
    basic.showString("Note:")
    if (Note2 == 0) {
        basic.showString("1+")
    } else {
        basic.showNumber(Note2)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Geschlecht = 1
    basic.setLedColor(0xff0080)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Einstellungen:")
    basic.showString("Alter =")
    basic.showNumber(Alter)
    basic.showString("Jahre;")
    basic.pause(500)
    basic.showString("Geschlecht =")
    if (Geschlecht == 1) {
        basic.showString("weiblich")
    } else if (Geschlecht == 2) {
        basic.showString("männlich")
    }
    basic.clearScreen()
})
let Alter = 0
let Geschlecht = 0
let Meter = 0
let Note2 = 0
Note2 = 6
Meter = 0
Geschlecht = 0
Alter = 11
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(500)
    basic.showIcon(IconNames.ArrowWest)
    basic.pause(500)
    basic.showString("oder")
    basic.pause(500)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        `)
    basic.pause(500)
    basic.showIcon(IconNames.ArrowEast)
    basic.pause(1000)
}
basic.clearScreen()
basic.forever(function () {
    if (Geschlecht == 1) {
        if (Alter == 11 && Meter >= 2500) {
            Note2 = 0
        } else if (Alter == 11 && Meter >= 2300) {
            Note2 = 1
        } else if (Alter == 11 && Meter >= 1900) {
            Note2 = 2
        } else if (Alter == 11 && Meter >= 1500) {
            Note2 = 3
        } else if (Alter == 11 && Meter >= 1200) {
            Note2 = 4
        } else if (Alter == 11 && Meter >= 900) {
            Note2 = 5
        } else if (Alter == 12 && Meter >= 2550) {
            Note2 = 0
        } else if (Alter == 12 && Meter >= 2350) {
            Note2 = 1
        } else if (Alter == 12 && Meter >= 1950) {
            Note2 = 2
        } else if (Alter == 12 && Meter >= 1550) {
            Note2 = 3
        } else if (Alter == 12 && Meter >= 1250) {
            Note2 = 4
        } else if (Alter == 12 && Meter >= 950) {
            Note2 = 5
        } else if (Alter == 13 && Meter >= 2600) {
            Note2 = 0
        } else if (Alter == 13 && Meter >= 2400) {
            Note2 = 1
        } else if (Alter == 13 && Meter >= 2000) {
            Note2 = 2
        } else if (Alter == 13 && Meter >= 1600) {
            Note2 = 3
        } else if (Alter == 13 && Meter >= 1300) {
            Note2 = 4
        } else if (Alter == 13 && Meter >= 1000) {
            Note2 = 5
        } else if (Alter == 14 && Meter >= 2650) {
            Note2 = 0
        } else if (Alter == 14 && Meter >= 2450) {
            Note2 = 1
        } else if (Alter == 14 && Meter >= 2050) {
            Note2 = 2
        } else if (Alter == 14 && Meter >= 1650) {
            Note2 = 3
        } else if (Alter == 14 && Meter >= 1350) {
            Note2 = 4
        } else if (Alter == 14 && Meter >= 1050) {
            Note2 = 5
        } else if (Alter == 15 && Meter >= 2700) {
            Note2 = 0
        } else if (Alter == 15 && Meter >= 2500) {
            Note2 = 1
        } else if (Alter == 15 && Meter >= 2100) {
            Note2 = 2
        } else if (Alter == 15 && Meter >= 1700) {
            Note2 = 3
        } else if (Alter == 15 && Meter >= 1400) {
            Note2 = 4
        } else if (Alter == 15 && Meter >= 1100) {
            Note2 = 5
        } else if (Alter == 16 && Meter >= 2750) {
            Note2 = 0
        } else if (Alter == 16 && Meter >= 2550) {
            Note2 = 1
        } else if (Alter == 16 && Meter >= 2150) {
            Note2 = 2
        } else if (Alter == 16 && Meter >= 1750) {
            Note2 = 3
        } else if (Alter == 16 && Meter >= 1450) {
            Note2 = 4
        } else if (Alter == 16 && Meter >= 1150) {
            Note2 = 5
        } else if (Alter == 17 && Meter >= 2800) {
            Note2 = 0
        } else if (Alter == 17 && Meter >= 2600) {
            Note2 = 1
        } else if (Alter == 17 && Meter >= 2200) {
            Note2 = 2
        } else if (Alter == 17 && Meter >= 1800) {
            Note2 = 3
        } else if (Alter == 17 && Meter >= 1500) {
            Note2 = 4
        } else if (Alter == 17 && Meter >= 1200) {
            Note2 = 5
        } else if (Alter == 18 && Meter >= 2850) {
            Note2 = 0
        } else if (Alter == 18 && Meter >= 2650) {
            Note2 = 1
        } else if (Alter == 18 && Meter >= 2250) {
            Note2 = 2
        } else if (Alter == 18 && Meter >= 1850) {
            Note2 = 3
        } else if (Alter == 18 && Meter >= 1550) {
            Note2 = 4
        } else if (Alter == 18 && Meter >= 1250) {
            Note2 = 5
        }
    } else if (Geschlecht == 2) {
        if (Alter == 11 && Meter >= 2800) {
            Note2 = 0
        } else if (Alter == 11 && Meter >= 2600) {
            Note2 = 1
        } else if (Alter == 11 && Meter >= 2200) {
            Note2 = 2
        } else if (Alter == 11 && Meter >= 1800) {
            Note2 = 3
        } else if (Alter == 11 && Meter >= 1500) {
            Note2 = 4
        } else if (Alter == 11 && Meter >= 1200) {
            Note2 = 5
        } else if (Alter == 12 && Meter >= 2850) {
            Note2 = 0
        } else if (Alter == 12 && Meter >= 2650) {
            Note2 = 1
        } else if (Alter == 12 && Meter >= 2250) {
            Note2 = 2
        } else if (Alter == 12 && Meter >= 1850) {
            Note2 = 3
        } else if (Alter == 12 && Meter >= 1550) {
            Note2 = 4
        } else if (Alter == 12 && Meter >= 1250) {
            Note2 = 5
        } else if (Alter == 13 && Meter >= 2900) {
            Note2 = 0
        } else if (Alter == 13 && Meter >= 2700) {
            Note2 = 1
        } else if (Alter == 13 && Meter >= 2300) {
            Note2 = 2
        } else if (Alter == 13 && Meter >= 1900) {
            Note2 = 3
        } else if (Alter == 13 && Meter >= 1600) {
            Note2 = 4
        } else if (Alter == 13 && Meter >= 1300) {
            Note2 = 5
        } else if (Alter == 14 && Meter >= 2950) {
            Note2 = 0
        } else if (Alter == 14 && Meter >= 2750) {
            Note2 = 1
        } else if (Alter == 14 && Meter >= 2350) {
            Note2 = 2
        } else if (Alter == 14 && Meter >= 1950) {
            Note2 = 3
        } else if (Alter == 14 && Meter >= 1650) {
            Note2 = 4
        } else if (Alter == 14 && Meter >= 1350) {
            Note2 = 5
        } else if (Alter == 15 && Meter >= 3000) {
            Note2 = 0
        } else if (Alter == 15 && Meter >= 2800) {
            Note2 = 1
        } else if (Alter == 15 && Meter >= 2400) {
            Note2 = 2
        } else if (Alter == 15 && Meter >= 2000) {
            Note2 = 3
        } else if (Alter == 15 && Meter >= 1700) {
            Note2 = 4
        } else if (Alter == 15 && Meter >= 1400) {
            Note2 = 5
        } else if (Alter == 16 && Meter >= 3050) {
            Note2 = 0
        } else if (Alter == 16 && Meter >= 2850) {
            Note2 = 1
        } else if (Alter == 16 && Meter >= 2450) {
            Note2 = 2
        } else if (Alter == 16 && Meter >= 2050) {
            Note2 = 3
        } else if (Alter == 16 && Meter >= 1750) {
            Note2 = 4
        } else if (Alter == 16 && Meter >= 1450) {
            Note2 = 5
        } else if (Alter == 17 && Meter >= 3100) {
            Note2 = 0
        } else if (Alter == 17 && Meter >= 2900) {
            Note2 = 1
        } else if (Alter == 17 && Meter >= 2500) {
            Note2 = 2
        } else if (Alter == 17 && Meter >= 2100) {
            Note2 = 3
        } else if (Alter == 17 && Meter >= 1800) {
            Note2 = 4
        } else if (Alter == 17 && Meter >= 1500) {
            Note2 = 5
        } else if (Alter == 18 && Meter >= 3150) {
            Note2 = 0
        } else if (Alter == 18 && Meter >= 2950) {
            Note2 = 1
        } else if (Alter == 18 && Meter >= 2550) {
            Note2 = 2
        } else if (Alter == 18 && Meter >= 2150) {
            Note2 = 3
        } else if (Alter == 18 && Meter >= 1850) {
            Note2 = 4
        } else if (Alter == 18 && Meter >= 1550) {
            Note2 = 5
        }
    }
})
