def on_button_pressed_a():
    global count
    for index in range(1e+23):
        count = count + 1
        basic.show_number(count)
input.on_button_pressed(Button.A, on_button_pressed_a)

count = 0
# this is the greeting :]
basic.show_leds("""
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    """)
basic.show_leds("""
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    """)
basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    """)