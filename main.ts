// all code is contained in the "on button A pressed" funk
input.onButtonPressed(Button.A, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    basic.pause(100)
    cuteBot.motors(75, -75)
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    basic.pause(100)
    cuteBot.motors(15, -15)
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    basic.pause(100)
    cuteBot.motors(-90, 90)
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        cuteBot.motors(145, -145)
        basic.pause(100)
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
        basic.pause(100)
        cuteBot.motors(-55, 55)
        basic.pause(100)
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
    }
    basic.pause(100)
    for (let index = 0; index < 2; index++) {
        cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
        basic.pause(100)
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 1)
    }
    basic.pause(100)
    cuteBot.motors(100, -100)
    basic.pause(5000)
    cuteBot.stopcar()
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
    basic.pause(100)
    for (let index = 0; index < 1e+26; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(1000)
        strip.clear()
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.clear()
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(1000)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
