function MiddleFly(){
//	this.ele=$("<div></div>");
//	this.ele.css({"background":"img/plain2_die2.png"});
//	this.ele.addClass("diji2");
//	this.ele.appendTo("body");
	Daxingfeiji.call(this,2)
}
 MiddleFly.prototype={};
for(var k in Daxingfeiji.prototype)
{
	MiddleFly.prototype[k]=Daxingfeiji.prototype[k];
}
