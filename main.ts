//  当向左倾斜：以“游戏”设为随机数“1至3”→进入逻辑判断
//  逻辑判断：
// 如果为“游戏”=“1” →显示图标（石头）
// 如果为“游戏”=“2” →显示图标（剪刀）
// 如果为“游戏”=“3” →显示图标（布）
input.onGesture(Gesture.TiltLeft, function () {
    game2 = randint(1, 3)
    if (game2 == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (game2 == 2) {
        basic.showIcon(IconNames.Scissors)
    } else if (game2 == 3) {
        basic.showIcon(IconNames.Square)
    }
})
// 当振动：以“骰子”设为随机数“1至6”→进入逻辑判断
// 逻辑判断：
// 如果为“骰子”=“1” →显示LED（1点）
// 如果为“骰子”=“2” →显示LED （2点）
// 如果为“骰子”=“3” →显示LED （3点）
// 如果为“骰子”=“4” →显示LED （4点）
// 如果为“骰子”=“5” →显示LED （5点）
// 如果为“骰子”=“6” →显示LED （6点）
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    if (dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (dice == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (dice == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (dice == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
//  当A+B按钮按下：进入逻辑判断
//  逻辑判断：
// 如果为“生命”>“0” →以“-1”为辐度更改“生命” →显示数
// 字“生命” →进入逻辑判断
// 如果为“生命”=“0” →显示图标（哭脸）→播放旋律“哀乐”
// 重复播放一次→暂停5秒→重置
input.onButtonPressed(Button.AB, function () {
    if (life > 0) {
        life += -1
        basic.showNumber(life)
    }
    if (life == 0) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.pause(5000)
        control.reset()
    }
})
// 将变量“骰子”设为“0”→将变量“游戏”设
// 为“0” →将变量“生命”设为“5” →清空屏幕
let life = 0
let game2 = 0
let dice = 0
dice = 0
game2 = 0
life = 5
basic.clearScreen()
