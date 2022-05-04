input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
        basic.pause(pasa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
        basic.pause(pasa)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    }
})
input.onButtonPressed(Button.A, function () {
    pasa += 50
})
input.onButtonPressed(Button.B, function () {
    pasa += -50
})
let pasa = 0
DFRobotMaqueenPlus.I2CInit()
pasa = 1000
basic.forever(function () {
    basic.showNumber(pasa)
})
