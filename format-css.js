//Css格式化脚本开始
function formatCss(source,options) {
	var insertNewLine = options.insert_newlines||false;//在各个项目之间插入空行.
	var result = source.replace(/ {2,}|[\f\n\r\t\v]+/g,"");
	result = result.replace(/(\*\/|})/g,'$1\r\n');
	result = result.replace(/( )?(:|}|{|;)( )?/g,'$2');
	if(insertNewLine)
		result = result.replace(/(\*\/|})/g,'$1\r\n');
	return result;
}