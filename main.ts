let dice = 0
input.onGesture(Gesture.Shake, function () {
    dice = randint(0, 6)
    if (dice == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
	
})
