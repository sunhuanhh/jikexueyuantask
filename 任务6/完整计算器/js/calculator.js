var num = 0; // 定义第一个输入的数据
/**
 * 获取当前输入
 * @param  string num 输入值
 * @return string     输入值
 */
function count(num) {
    document.getElementById('screenName').value += document.getElementById(num).value;
}

/**
 * 计算输入结果
 * @return number 计算结果
 */
function eva() {
    var obj = document.getElementById("screenName").value;
    //截取除号至等于之间的字符
    var div = obj.substring(obj.indexOf("/") + 1, obj.length);
    if (div == 0) {
        alert('除数不能为0');
        document.getElementById("screenName").value = 'NaN';
    }
    document.getElementById("screenName").value = parseFloat((eval(document.getElementById("screenName").value)).toFixed(9));
}
/**
 * 计算正玄
 * @return number 输出正玄值
 */
function sin() {
    var numSin = document.getElementById("screenName").value;
    document.getElementById('screenName').value = parseFloat(Math.sin(numSin*Math.PI/180).toFixed(9));
}//PI即圆周率，Math.PI/180*num是将num从弧度转换成角度
/**
 * 计算余玄
 * @return number 输出余玄值
 */
function cos() {
    var numCos = document.getElementById("screenName").value;
    document.getElementById('screenName').value = parseFloat(Math.cos(numCos*Math.PI/180).toFixed(9));
}
/**
 * 清除
 * @return function 清空
 */
function clearNum() {
    document.getElementById("screenName").value = "";
}
/**
 * 退格
 * @return function 退格
 */
function backNum() {
    var arr = document.getElementById("screenName");
    arr.value = arr.value.substring(0, arr.value.length - 1);
}
