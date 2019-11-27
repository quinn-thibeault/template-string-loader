/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Brad Benvenuti @bradbenvenuti
*/
module.exports = function(content) {
	var regex = /(module\.exports\s?=\s?|exports\.default\s?=\s?|export default )"(.*)";?/;
	var matches = content.match(regex);
	content = (matches && matches[2]) ? matches[2] : content;
	
	this.cacheable && this.cacheable();
	this.value = content;
	return 'module.exports=function(scope){ return `' + content + '`};';
};
