function Smartfly(){
//	this.ele=$("<div></div>");
//	this.ele.css({"background":"img/plain1_die1.png"});
//	this.ele.addClass("diji1");
//	this.ele.appendTo("body");
	Daxingfeiji.call(this,1)
}
Smartfly.prototype={};
for(var k in Daxingfeiji.prototype)
{
	Smartfly.prototype[k]=Daxingfeiji.prototype[k];
}
