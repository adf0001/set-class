
//global variable, for html page, refer tpsvr @ npm.
set_class = require("../set-class.js");

//test tool
function _addCssText(cssText) {
	var style = document.createElement("style");
	style.type = "text/css";

	try {
		style.appendChild(document.createTextNode(cssText));
	}
	catch (ex) {
		style.styleSheet.cssText = cssText;
	}
	document.getElementsByTagName("head")[0].appendChild(style);
};

_addCssText("\
	.ht.selected{background:lavender;}\
");

module.exports = {

	"setClass/setByElement()": function (done) {

		return "<span class='ht selected'>css .ht.selected style sample</span>" +
			"<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;set_class([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected',null,'ht'); set_class([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'',null,'ht');\"" +
			"></input>toggle by set()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;set_class.setByElement('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],this.checked?[chs[1],chs[3]]:[chs[0],chs[2]],null,'ht');\"" +
			"></input>toggle by setByElement()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;set_class.setByElement('selected',null,null,[chs[0],chs[1],chs[2],chs[3]],'ht');\"" +
			"></input>setByElement() toggle</label><br>" +
			"</div>";
	},

	"check exports": function (done) {
		for (var i in set_class) {
			if (typeof set_class[i] === "undefined") { done("undefined: " + i); return; }
		}
		done(false);

		console.log(set_class);
		var list = "export list: " + Object.keys(set_class).join(", ");
		console.log(list);
		return list;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('set_class', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
