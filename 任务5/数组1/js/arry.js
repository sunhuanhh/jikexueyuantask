/**
 * 定义数组
 * @type {Array}
 */
var arr = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
//定义一个result对象
var result = {};
/**
 * 遍历数组
 * @param  string item   当前值
 * @param  number index  索引值
 * @return string        出现最多的次数和位置
 */
arr.forEach(function(item, index) {
    if (result[item]) {
        result[item].num += 1;
        result[item].position.push(index);
    } else {
        result[item] = { num: 1, position: [index] };
    }
});
/**
 * 排序数组
 * @param  string a  字母
 * @param  string b  字母
 * @return string    出现次数最多的字母
 */
var maxChar = Object.keys(result).sort(function(a, b) {
    return result[a].num < result[b].num;
})[0];

document.write('出现次数最多的字母是：' + maxChar + '<br/>');
document.write('共出现了' + result[maxChar].num + '次<br/>');
document.write('它在数组中的位置是：' + result[maxChar].position);
