var e = function(selector) {
    return document.querySelector(selector)
}
var es = function(selector) {
    return document.querySelectorAll(selector)
}
var log = function() {
    console.log.apply(console, arguments)
}

// 2048
/*
***游戏的界面
    -在顶部有 logo/current scores/max scores/new game
    -顶部与主体部分的比例关系
    -主体为 4*4 的方格，宽度与顶部相同

***游戏的逻辑
    -创建一个 4*4 的方格
    -每一行用一个数组表示，四个数组包含在一个数组之内，数组内不同的 number 其拥有对应不同的 class
    -初始拥有两个随机位置的 number 数值为 2/4
    -随着用户的滑动方向进行相同项相加 up/down/left/right
    -更新 current scores 当超过 max scores 时，更新 max scores
    -判断失败，当格子被填满是否有相邻的项数值相同。若为否，则游戏失败
    -判断是否存在 2048 若是，则游戏成功
*/

const initArray = [
    [0, 0, 0,0],
    [0, 0, 0,0],
    [0, 0, 0,0],
    [0, 0, 0,0]
]
const viewClassByNumber = function(element, number) {
    element.setAttribute('class', '')
    var c = String(number)
    element.classList.add(c)
}
const creatRandomNumber = function() {
    var num = Math.floor(Math.random()*10+1)
    // 设置 2 的出现概率为 80% ，4 的出现概率为 20%
    if (num > 8) {
        return 2
    } else {
        return 4
    }
}
const addZero = function(array, direction, n) {
    // direction 为数组 添加 0 的方向， n 为添加的个数
    var a = array.slice(0)
    if (direction == 'left') {
        for (var i = 0; i < n; i++) {

        }
    }
}
