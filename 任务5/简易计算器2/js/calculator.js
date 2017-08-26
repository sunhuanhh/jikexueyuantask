/**
 * equal 输出计算结果
 * @return number 计算结果
 */
function equal() {
    var num1 = document.getElementById('num1').value;
    num1 = num1.trim(); //去掉两端的空格
    if (num1 === '' || isNaN(num1)) {
        alert("请在第一个文本框中输入数字");
    }
    num1 = parseFloat(num1); //把字符串转成数字

    var num2 = document.getElementById('num2').value;
    num2 = num2.trim(); //去掉两端的空格
    if (num2 === '' || isNaN(num2)) {
        alert("请在第二个文本框中输入数字");
    }
    num2 = parseFloat(num2); //把字符串转成数字

    var operator = document.getElementById('operator').value;
    document.getElementById('result').innerText = result(num1, num2, operator);
}
/**
 * result 输入数字做算术运算
 * @param  number num1     输入的第一个值
 * @param  number num2     输入的第二个值
 * @param  string operator 算术运算符
 * @return number          运算结果
 */
function result(num1, num2, operator) {
    switch (operator) {
        case '+':
            var res = num1 + num2;
            res = parseFloat(res.toFixed(9)); //把数字转换为字符串,再转成数字
            return res;
        case '-':
            var res = num1 - num2;
            res = parseFloat(res.toFixed(9)); //把数字转换为字符串,再转成数字
            return res;
        case '*':
            var res = num1 * num2;
            res = parseFloat(res.toFixed(9)); //把数字转换为字符串,再转成数字
            return res;
        case '/':
            if (num2 != 0) {
                var res = num1 / num2;
                res = parseFloat(res.toFixed(9)); //把数字转换为字符串,再转成数字
                return res;
            } else {
                return "除数不能为0！";
            }
        default:
            return "未知操作符";
    }
}
