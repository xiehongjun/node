var calc = {
    "+"(a,b) {
        return a+b;
    },
    "-"(a,b) {
        return a-b;
    }
};
//使用两种方式导出 在useCalc中分别调用这两个方法
// 1.module.exports = calc;
// 2.
exports.calc = calc;
