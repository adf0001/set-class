# set-class
set element class tool

# Install
```
npm set-class
```

# Usage & Api
```html
<style>
.ht.selected{
	background:lavender;
}
</style>

<script>
set_class = require("set-class");
</script>

<span class='ht selected'>css .ht.selected style sample</span>

<div>
<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>

<!-- setClass(elList, addClassList, removeClassList, toggleClassList, frameName)-->
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	set_class.set([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected',null,'ht');
	set_class.set([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'',null,'ht');"
></input>toggle by set()</label><br>

<!-- var setByElement(classList, addElList, removeElList, toggleElList, frameName) -->
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	set_class.setByElement('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],
	this.checked?[chs[1],chs[3]]:[chs[0],chs[2]],null,'ht');"
></input>toggle by setByElement()</label><br>
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	set_class.setByElement('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);"
></input>setByElement() toggle	//may fail at firstly click</label><br>
</div>;

```
