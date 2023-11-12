input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    for (let index = 0; index < 1e+23; index++) {
        count = count + 1
        basic.showNumber(count)
    }
})
let count = 0
//  this is the greeting :]
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
