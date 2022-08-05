
var set_class = require("./set-class");

var frameCache = {};	//map frameName to the binding object

var bindFrame = function (defaultFrameName) {
	if (typeof defaultFrameName !== "string") return null;

	if (defaultFrameName in frameCache) return frameCache[defaultFrameName];

	//binding
	//console.log("new frameName binding")
	var newSetClass = function (elList, addClassList, removeClassList, toggleClassList, frameName) {
		return set_class.setClass(elList, addClassList, removeClassList, toggleClassList, frameName || defaultFrameName);
	}
	var newSetByElement = function (classList, addElList, removeElList, toggleElList, frameName) {
		return set_class.setByElement(classList, addElList, removeElList, toggleElList, frameName || defaultFrameName);
	}
	var newAddClass = function (elList, classList1 /*, classList2, ... */) {
		return set_class.setClassList.apply(null, ["add", ...arguments, defaultFrameName]);
	};
	var newToggleClass = function (elList, classList1 /*, classList2, ... */) {
		set_class.setClassList("add", elList, defaultFrameName);
		return set_class.setClassList.apply(null, ["toggle", ...arguments]);
	};

	return frameCache[defaultFrameName] = Object.assign({},		//cache
		set_class,
		{
			addClass: newAddClass,
			add: newAddClass,

			toggleClass: newToggleClass,
			toggle: newToggleClass,

			setClass: newSetClass,
			set: newSetClass,

			setByElement: newSetByElement,

			bindFrame,
		}
	);
}

//module exports

module.exports = {
	bindFrame,
};
