// set-class @ npm, set element class tool.

var setClassList = function (op, elList, classList1 /*, classList2, ... */) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];

	var i, imax = elList.length, j, jmax = arguments.length, k, kmax, classList, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);

		for (j = 2; j < jmax; j++) {
			if (!(classList = arguments[j])) continue;

			if (classList instanceof Array) {
				//el.classList[op].apply(el.classList, classList);	//discard, ie don't support multiple parameters
				kmax = classList.length;
				for (k = 0; k < kmax; k++) el.classList[op](classList[k]);
			}
			else {
				el.classList[op](classList);
			}
		}
	}
}

var addClass = function (elList, classList1 /*, classList2, ... */) {
	return setClassList.apply(null, ["add", ...arguments]);
}

var removeClass = function (elList, classList1 /*, classList2, ... */) {
	return setClassList.apply(null, ["remove", ...arguments]);
}

var toggleClass = function (elList, classList1 /*, classList2, ... */) {
	return setClassList.apply(null, ["toggle", ...arguments]);
}

//combine
var setClass = function (elList, addClassList, removeClassList, toggleClassList, frameName) {
	//arguments
	var i, imax = elList.length, el, created;

	if (!(elList instanceof Array)) { elList = [elList]; created = 1; }

	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") {
			if (!created) { elList = [...elList]; created = 1; }	//duplicate

			elList[i] = document.getElementById(el);
		}
	}

	//combine call
	if (addClassList || frameName) addClass(elList, addClassList, frameName);
	if (removeClassList) removeClass(elList, removeClassList);
	if (toggleClassList) toggleClass(elList, toggleClassList);
}

//combine by element
var setByElement = function (classList, addElList, removeElList, toggleElList, frameName) {
	//arguments
	if (!(classList instanceof Array)) classList = [classList];

	//combine call
	if (addElList) addClass(addElList, classList, frameName);
	if (removeElList) removeClass(removeElList, classList);
	if (toggleElList) {
		if (frameName) addClass(toggleElList, frameName);
		toggleClass(toggleElList, classList);
	}
}

//module exports

module.exports = {
	setClassList,

	addClass,
	add: addClass,

	removeClass,
	remove: removeClass,

	toggleClass,
	toggle: toggleClass,

	setClass,
	set: setClass,

	setByElement,
};
