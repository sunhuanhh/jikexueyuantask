/**
 * equal 输出计算结果
 * @return number 计算结果
 */
function equal() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
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
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 != 0) {
                return num1 / num2;
            } else {
                return "被除数不能为零！";
            }
        default:
            return "未知操作符";
    }
}
