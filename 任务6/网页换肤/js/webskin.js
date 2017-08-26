/**
 * 网页换肤
 * @param  string name 颜色样式名
 * @return string      新的样式文件
 */
var cssname=localStorage.getItem('cssname');//读取数据：localStorage.getItem(key);
if (cssname) {
	var css = document.getElementById("cssfile");
    css.href = "css/" + cssname + ".css";
}

function changeSkin(name) {
    var css = document.getElementById("cssfile");
    css.href = "css/" + name + ".css"; 
    localStorage.setItem('cssname',name);//保存数据：localStorage.setItem(key,value);
}
