input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    coordenada_X += 1
    basic.showNumber(coordenada_X)
    basic.pause(2000)
    if (!(validar_coordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
function validar_coordenadas () {
    if (coordenada_X <= 4 && coordenada_Y <= 4) {
        basic.clearScreen()
        led.plot(coordenada_X, coordenada_Y)
        return true
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        coordenada_X = 0
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        coordenada_Y = 0
        basic.pause(100)
        basic.clearScreen()
    }
    return false
}
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    coordenada_Y += 1
    basic.showNumber(coordenada_Y)
    basic.pause(2000)
    if (!(validar_coordenadas())) {
        basic.showIcon(IconNames.Cow)
    }
})
let coordenada_Y = 0
let coordenada_X = 0
coordenada_X = 0
coordenada_Y = 0
led.plot(coordenada_X, coordenada_Y)
