Editplus-Format
===============

editplus 格式化代码，目前主要是调用js-beautify格式化html，css，js代码，其它的扩展中。


使用方式：
Menu text: JSBeautify
Command ：WScript.exe "$(AppDir)\filters\\JSBeautify\\JSBeautify.wsf"
Argument: $(FilePath)
Action: Run as Text(Replace)

本例保存文件在安装文件夹filters目录下。

目前只支持utf-8,没找到editplus字符编码的api不然适用范围就比较广。
