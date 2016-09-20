//如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
//标准浏览器使用__defineGetter__, __defineSetter__实现
export var canHideProperty = true
try {
    Object.defineProperty({}, '_', {
        value: 'x'
    })
} catch (e) {
    /* istanbul ignore next*/
    canHideProperty = false
}
