//SqL格式化脚本开始
function formatSql(source,options) {
	var result = source.replace(/[\f\t\v;]+/g, "");//移除掉换页符,制表符,竖向制表符与分号
	result = result.replace(/[\n\r]+/g, " ");//替换回车与换行符为空格
	result = result.replace(/, /g, ",");//替换, 为,去除多余的空格
	result = result.replace(/ {2,}/g, " ");//移除多空格
	return result;
}